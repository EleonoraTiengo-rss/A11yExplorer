import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-css-logical-properties',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './css-logical-properties.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssLogicalPropertiesComponent {}
