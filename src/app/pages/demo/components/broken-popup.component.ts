import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-popup',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './broken-popup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenPopupComponent {
  showPopup = input.required<boolean>();
  timeLeft = input.required<number>();
  popupClosed = output<void>();
}
