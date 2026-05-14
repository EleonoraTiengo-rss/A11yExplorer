import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  ElementRef,
  HostListener,
  viewChild,
  input,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-custom-select",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./custom-select.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSelectComponent {
  pokes = input<{ id: string; name: string; type: string }[]>([]);

  dittoContainer = viewChild<ElementRef>("dittoContainer");

  isDittoOpen = signal(false);
  selectedPokeIdx = signal(0);
  highlightedIdx = signal(0);

  selectedPoke = computed(() => this.pokes()[this.selectedPokeIdx()]);

  optionsLength = computed(() => this.pokes().length || 0);

  highlightedOptionId = computed(() => `option-${this.highlightedIdx()}`);

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const container = this.dittoContainer()?.nativeElement;
    if (container && !container.contains(event.target)) {
      this.isDittoOpen.set(false);
    }
  }

  toggleDitto(): void {
    this.isDittoOpen.update((v) => !v);
    if (this.isDittoOpen()) {
      this.highlightedIdx.set(this.selectedPokeIdx());
    }
  }

  selectPoke(idx?: number): void {
    if (idx !== undefined && idx >= 0) {
      this.highlightedIdx.update(() => idx);
    }
    this.selectedPokeIdx.set(this.highlightedIdx());
    this.isDittoOpen.set(false);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (!this.isDittoOpen()) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        this.isDittoOpen.set(true);
        this.highlightedIdx.set(this.selectedPokeIdx());
      }
      return;
    }
    event.preventDefault();
    switch (event.key) {
      case "ArrowDown":
        this.highlightedIdx.update((i) => (i + 1) % this.optionsLength());
        if (event.altKey) {
          this.selectPoke();
        }
        break;
      case "ArrowUp":
        this.highlightedIdx.update(
          (i) => (i - 1 + this.optionsLength()) % this.optionsLength(),
        );
        if (event.altKey) {
          this.selectPoke();
        }
        break;
      case "PageUp":
        this.highlightedIdx.update((i) => Math.max(0, i - 10));
        break;
      case "PageDown":
        this.highlightedIdx.update((i) =>
          Math.min(this.optionsLength() - 1, i + 10),
        );
        break;
      case "Home":
        this.highlightedIdx.update(() => 0);
        break;
      case "End":
        this.highlightedIdx.update(() => this.optionsLength() - 1);
        break;
      case "Enter":
      case " ":
      case "Tab":
        this.selectPoke();
        break;
      case "Escape":
        this.isDittoOpen.set(false);
        break;
    }
  }
}
