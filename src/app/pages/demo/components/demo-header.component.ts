import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './demo-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHeaderComponent {
  accessibilityToggled = output<void>();
}
