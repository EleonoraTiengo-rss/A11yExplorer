import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-wcag-principles',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './wcag-principles.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WcagPrinciplesComponent {}
