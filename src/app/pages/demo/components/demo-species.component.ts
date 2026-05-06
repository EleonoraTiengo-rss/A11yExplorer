import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-species',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  host: { class: 'block' },
  templateUrl: './demo-species.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSpeciesComponent {
  scrollToRequested = output<{id: string, focusOnly?: boolean, noFocus?: boolean}>();
}
