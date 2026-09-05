import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-demo-hero-button",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./demo-hero-button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoHeroButtonComponent {
  count = signal(0);
  message = signal("");

  throwBall(): void {
    this.count.update((n) => n + 1);
    this.message.set(`Poké Ball lanciata! Totale: ${this.count()}`);
  }
}
