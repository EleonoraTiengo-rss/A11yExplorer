import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-learn-challenges',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './learn-challenges.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearnChallengesComponent {}
