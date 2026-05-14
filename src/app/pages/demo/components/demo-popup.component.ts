import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  ElementRef,
  viewChild,
  effect,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { OnDestroy, OnInit, computed, inject, signal } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { CdkTrapFocus } from "@angular/cdk/a11y";

@Component({
  selector: "app-demo-popup",
  standalone: true,
  imports: [MatIconModule, CdkTrapFocus],
  templateUrl: "./demo-popup.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes zoomIn {
      from {
        transform: scale(0.96);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    .animate-in {
      animation:
        fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1),
        zoomIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
  `,
})
export class DemoPopupComponent implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);

  readonly showPopup = input<boolean>(false);

  readonly popupClosed = output<void>();
  readonly timeoutExpired = output<void>();

  private readonly cancelBtnRef =
    viewChild<ElementRef<HTMLButtonElement>>("cancelButton");

  readonly timeLeft = signal<number>(60);
  readonly announcementText = signal<string>("");
  readonly initialSeconds = signal<number>(60);

  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private previousActiveElement: HTMLElement | null = null;

  readonly progressPercentage = computed(() => {
    const total = this.initialSeconds();
    if (total <= 0) return 0;
    return Math.max(0, Math.min(100, (this.timeLeft() / total) * 100));
  });

  constructor() {
    // Effect to react when popup opens or closes
    effect(() => {
      const isOpen = this.showPopup();
      if (isOpen) {
        this.handleDialogOpen();
      } else {
        this.handleDialogClose();
      }
    });
  }

  ngOnInit(): void {
    if (this.showPopup()) {
      this.handleDialogOpen();
    }
  }

  ngOnDestroy(): void {
    this.clearCountdown();
    this.restorePreviousFocus();
  }

  private handleDialogOpen(): void {
    if (
      typeof this.document !== "undefined" &&
      this.document.activeElement instanceof HTMLElement
    ) {
      this.previousActiveElement = this.document.activeElement;
    }

    const seconds = this.initialSeconds();
    this.timeLeft.set(seconds);
    this.announcementText.set("");

    this.clearCountdown();
    this.timerInterval = setInterval(() => {
      this.tick();
    }, 1000);

    setTimeout(() => {
      this.setInitialFocus();
    }, 50);
  }

  private handleDialogClose(): void {
    this.clearCountdown();
    this.restorePreviousFocus();
  }

  private tick(): void {
    const current = this.timeLeft();
    if (current <= 1) {
      this.timeLeft.set(0);
      this.clearCountdown();
      this.announcementText.set("Tempo scaduto. La sessione è terminata.");
      this.timeoutExpired.emit();
      this.closeDialog();
    } else {
      const next = current - 1;
      this.timeLeft.set(next);
      this.updateAnnouncement(next);
    }
  }

  private updateAnnouncement(seconds: number): void {
    if (
      seconds === 30 ||
      seconds === 20 ||
      seconds === 10 ||
      (seconds <= 5 && seconds > 0)
    ) {
      this.announcementText.set(`Rimangono ${seconds} secondi.`);
    }
  }

  private setInitialFocus(): void {
    this.cancelBtnRef()?.nativeElement.focus();
  }

  private restorePreviousFocus(): void {
    if (
      this.previousActiveElement &&
      typeof this.previousActiveElement.focus === "function"
    ) {
      try {
        this.previousActiveElement.focus();
      } catch {
        // Safe catch if element is no longer in DOM
      }
      this.previousActiveElement = null;
    }
  }

  private clearCountdown(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  onConfirm(): void {
    this.clearCountdown();
    this.closeDialog();
  }

  onCancel(): void {
    this.clearCountdown();
    this.announcementText.set(`Si è scelto di rimanere`);
    this.closeDialog();
  }

  private closeDialog(): void {
    this.popupClosed.emit();
    this.announcementText.set(`Si è scelto di uscire`);
    this.restorePreviousFocus();
  }
}
