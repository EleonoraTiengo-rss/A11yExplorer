import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-broken-species",
  standalone: true,
  imports: [MatIconModule, CommonModule],
  host: { class: "block" },
  templateUrl: "./broken-species.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenSpeciesComponent {
  openPanel = input<number | null>();
  panelToggled = output<number>();
  scrollToRequested = output<{
    id: string;
    focusOnly?: boolean;
    noFocus?: boolean;
  }>();
}
