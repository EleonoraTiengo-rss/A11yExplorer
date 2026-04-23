import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { QuizComponent } from '../../components/quiz/quiz.component';

import { LearnHeroComponent } from './components/learn-hero';
import { LearnChallengesComponent } from './components/learn-challenges';
import { WcagPrinciplesComponent } from './components/wcag-principles';
import { HtmlVsAriaComponent } from './components/html-vs-aria';
import { LearnGymComponent } from './components/learn-gym';
import { TeamRocketErrorsComponent } from './components/team-rocket-errors';
import { CssLogicalPropertiesComponent } from './components/css-logical-properties';
import { WcagLevelsComponent } from './components/wcag-levels';
import { AccessibilityToolsComponent } from './components/accessibility-tools';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [
    MatIconModule, 
    QuizComponent,
    LearnHeroComponent,
    LearnChallengesComponent,
    WcagPrinciplesComponent,
    HtmlVsAriaComponent,
    LearnGymComponent,
    TeamRocketErrorsComponent,
    CssLogicalPropertiesComponent,
    WcagLevelsComponent,
    AccessibilityToolsComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './learn.component.html'
})
export class LearnComponent {}
