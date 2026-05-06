import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-habitat',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './demo-habitat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHabitatComponent {}
