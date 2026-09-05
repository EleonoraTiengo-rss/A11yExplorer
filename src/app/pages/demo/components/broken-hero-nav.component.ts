import { Component, ChangeDetectionStrategy, output } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-broken-hero-nav",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./broken-hero-nav.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenHeroNavComponent {
  scrollToRequested = output<{
    id: string;
    focusOnly?: boolean;
    noFocus?: boolean;
  }>();

  navigateWithoutFocus(event: Event): void {
    event.preventDefault();
    this.scrollToRequested.emit({ id: "species", noFocus: true });
  }
}
