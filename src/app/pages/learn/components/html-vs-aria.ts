import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-html-vs-aria',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './html-vs-aria.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlVsAriaComponent {}
