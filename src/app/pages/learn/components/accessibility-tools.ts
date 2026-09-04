import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-accessibility-tools",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./accessibility-tools.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessibilityToolsComponent {}
