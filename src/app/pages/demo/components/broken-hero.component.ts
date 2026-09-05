import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BrokenHeroButtonComponent } from './broken-hero-button.component';

@Component({
  selector: 'app-broken-hero',
  standalone: true,
  imports: [BrokenHeroButtonComponent],
  host: { class: 'block' },
  templateUrl: './broken-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenHeroComponent {}
