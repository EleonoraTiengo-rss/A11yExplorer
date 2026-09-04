import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-broken-habitat",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./broken-habitat.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenHabitatComponent {}
