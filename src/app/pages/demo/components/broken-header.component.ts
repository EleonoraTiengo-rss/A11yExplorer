import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './broken-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenHeaderComponent {
  accessibilityToggled = output<void>();
}
