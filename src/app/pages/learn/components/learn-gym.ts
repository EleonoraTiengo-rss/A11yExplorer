import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DittoChallengeComponent } from './ditto-challenge';

@Component({
  selector: 'app-learn-gym',
  standalone: true,
  imports: [MatIconModule, DittoChallengeComponent],
  templateUrl: './learn-gym.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearnGymComponent {

  onClickButton(): void {
    console.warn("Button clicked");
  }
}
