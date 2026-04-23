import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-learn-gym',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './learn-gym.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearnGymComponent {}
