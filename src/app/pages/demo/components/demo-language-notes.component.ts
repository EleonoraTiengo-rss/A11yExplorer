import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-language-notes',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './demo-language-notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoLanguageNotesComponent {}
