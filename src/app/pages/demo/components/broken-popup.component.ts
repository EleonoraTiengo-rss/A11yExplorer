import {
  Component,
  ChangeDetectionStrategy,
  effect,
  input,
  OnDestroy,
  output,
  signal,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-broken-popup",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./broken-popup.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenPopupComponent implements OnDestroy {
  showPopup = input.required<boolean>();
  timeLeft = signal<number>(15);
  popupClosed = output<void>();

  private timerInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    effect(() => {
      if (this.showPopup()) {
        this.startCountdown();
      } else {
        this.clearCountdown();
      }
    });
  }

  ngOnDestroy(): void {
    this.clearCountdown();
  }

  private startCountdown(): void {
    this.timeLeft.set(15);
    this.clearCountdown();
    this.timerInterval = setInterval(() => {
      const current = this.timeLeft();
      if (current <= 1) {
        this.timeLeft.set(0);
        this.clearCountdown();
      } else {
        this.timeLeft.set(current - 1);
      }
    }, 1000);
  }

  private clearCountdown(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
}
