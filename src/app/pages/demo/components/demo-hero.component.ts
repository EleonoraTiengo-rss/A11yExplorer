import { Component, ChangeDetectionStrategy, output } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-demo-hero",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./demo-hero.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoHeroComponent {
  scrollToRequested = output<{
    id: string;
    focusOnly?: boolean;
    noFocus?: boolean;
  }>();
}
