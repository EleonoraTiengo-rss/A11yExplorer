import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DocumentationLinksComponent } from './documentation-links';

@Component({
  selector: 'app-wcag-levels',
  standalone: true,
  imports: [DocumentationLinksComponent],
  templateUrl: './wcag-levels.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WcagLevelsComponent {}
