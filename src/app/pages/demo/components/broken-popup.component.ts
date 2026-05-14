import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  signal,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-broken-popup",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./broken-popup.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenPopupComponent {
  showPopup = input.required<boolean>();
  timeLeft = signal<number>(15);
  popupClosed = output<void>();
}
