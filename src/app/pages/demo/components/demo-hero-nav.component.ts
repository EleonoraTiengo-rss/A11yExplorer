import { Component, ChangeDetectionStrategy, ElementRef, output, signal, viewChildren } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-demo-hero-nav",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./demo-hero-nav.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoHeroNavComponent {
  scrollToRequested = output<{ id: string }>();

  // Roving tabindex: only the active menuitem is in the tab sequence (APG menubar pattern)
  activeIndex = signal(0);
  private menuitems = viewChildren<ElementRef<HTMLAnchorElement>>("menuitem");

  navigate(event: Event, id: string): void {
    event.preventDefault();
    this.scrollToRequested.emit({ id });
  }

  onKeydown(event: KeyboardEvent, index: number, id: string): void {
    const count = this.menuitems().length;
    let handled = true;

    switch (event.key) {
      case " ":
        this.navigate(event, id);
        break;
      case "ArrowRight":
        this.focusItem((index + 1) % count);
        break;
      case "ArrowLeft":
        this.focusItem((index - 1 + count) % count);
        break;
      case "Home":
        this.focusItem(0);
        break;
      case "End":
        this.focusItem(count - 1);
        break;
      default:
        handled = this.isPrintableCharacter(event.key) && this.focusByFirstCharacter(index, event.key);
    }

    if (handled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  focusItem(index: number): void {
    this.activeIndex.set(index);
    this.menuitems()[index].nativeElement.focus();
  }

  private focusByFirstCharacter(currentIndex: number, char: string): boolean {
    // Read the label span only: mat-icon ligature text would otherwise be the first character
    const firstChars = this.menuitems().map((item) =>
      item.nativeElement.querySelector("span")?.textContent?.trim().charAt(0).toLowerCase(),
    );
    const count = firstChars.length;
    const target = char.toLowerCase();

    // Search after the current item first, then wrap around to the beginning
    for (let offset = 1; offset <= count; offset++) {
      const i = (currentIndex + offset) % count;
      if (firstChars[i] === target) {
        this.focusItem(i);
        return true;
      }
    }
    return false;
  }

  private isPrintableCharacter(key: string): boolean {
    return key.length === 1 && /\S/.test(key);
  }
}
