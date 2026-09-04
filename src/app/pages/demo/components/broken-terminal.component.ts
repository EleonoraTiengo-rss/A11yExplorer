import { Component, ChangeDetectionStrategy, output } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-broken-terminal",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./broken-terminal.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenTerminalComponent {
  popupOpened = output<void>();
}
