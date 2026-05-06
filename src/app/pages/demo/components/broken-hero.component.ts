import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-hero',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './broken-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenHeroComponent {
  scrollToRequested = output<{id: string, focusOnly?: boolean, noFocus?: boolean}>();
}
