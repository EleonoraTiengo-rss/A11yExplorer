import { Component, ChangeDetectionStrategy } from "@angular/core";
import { DemoHeroButtonComponent } from "./demo-hero-button.component";

@Component({
  selector: "app-demo-hero",
  standalone: true,
  imports: [DemoHeroButtonComponent],
  host: { class: "block" },
  templateUrl: "./demo-hero.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoHeroComponent {}
