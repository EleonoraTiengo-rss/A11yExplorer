import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-learn-hero',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './learn-hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearnHeroComponent {}
