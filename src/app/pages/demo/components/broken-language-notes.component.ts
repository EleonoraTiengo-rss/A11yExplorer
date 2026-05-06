import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-language-notes',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './broken-language-notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenLanguageNotesComponent {}
