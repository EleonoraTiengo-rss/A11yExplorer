import { Component, ChangeDetectionStrategy, output } from "@angular/core";
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

  navigate(event: Event, id: string): void {
    event.preventDefault();
    this.scrollToRequested.emit({ id });
  }
}
