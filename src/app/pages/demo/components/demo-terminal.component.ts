import { Component, ChangeDetectionStrategy, output } from "@angular/core";

@Component({
  selector: "app-demo-terminal",
  standalone: true,
  host: { class: "block" },
  templateUrl: "./demo-terminal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoTerminalComponent {
  popupOpened = output<void>();
}
