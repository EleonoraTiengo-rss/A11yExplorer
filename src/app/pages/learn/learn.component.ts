import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { QuizComponent } from '../../components/quiz/quiz.component';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [MatIconModule, QuizComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './learn.component.html'
})
export class LearnComponent {}
