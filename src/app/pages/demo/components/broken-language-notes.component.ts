import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-language-notes',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './broken-language-notes.component.html',
  styles: [`
    .language-section { padding-block: 2rem; padding-inline: 2rem; }
    .card { background: white; border-radius: 1rem; padding: 1.25rem; box-shadow: 0 4px 14px rgba(0,0,0,.08); border: 1px solid #e5e7eb; }
    h2 { margin-top: 0; font-size: 1.125rem; }
    .content-wrapper { display: flex; gap: 1.5rem; align-items: flex-start; }
    .note { writing-mode: vertical-rl; direction: rtl; height: 16rem; padding: 1.5rem; width: fit-content; }
    .note article { border-left: 0.4rem solid #e63946; padding-left: 1.25rem; }
    .note img { width: 8rem; float: left; margin-right: 1rem; margin-bottom: 0.75rem; }
    .note p { margin: 0; line-height: 1.75; }
    .translation { flex: 1; direction: ltr; writing-mode: horizontal-tb; font-size: 0.95rem; color: #6b7280; line-height: 1.7; display: flex; flex-direction: column; min-height: 16rem; padding: 1rem 0; }
    .translation p { flex: 1; margin: 0; }
    .translation img { width: 8rem; align-self: flex-end; }

    .caption { margin-top: 1.5rem; border-top: 1px solid #e5e7eb; padding-top: 1rem; color: #6b7280; font-size: .875rem; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenLanguageNotesComponent {}
