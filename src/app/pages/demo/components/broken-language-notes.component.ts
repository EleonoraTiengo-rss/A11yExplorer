import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-language-notes',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './broken-language-notes.component.html',
  styles: [`
    .language-section { padding-block: 0.5rem; padding-inline: 0.5rem; }
    @media (min-width: 768px) {
      .language-section { padding-block: 2rem; padding-inline: 2rem; }
    }
    .card { background: #ffffff; border-radius: 0.5rem; padding: 0.5rem; box-shadow: 0 4px 14px rgba(0,0,0,.08); border: 1px solid #e5e7eb; color: #1f2937; }
    @media (min-width: 768px) {
      .card { border-radius: 1rem; padding: 1.25rem; }
    }
    h2 { margin-block-start: 0; font-size: 1.125rem; }
    .content-wrapper { display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-start; inline-size: 100%; }
    @media (min-width: 768px) {
      .content-wrapper { flex-direction: row; gap: 1.5rem; }
    }
    .note { height: 16rem; padding: 0.5rem; width: fit-content; max-inline-size: 100%; box-sizing: border-box; }
    @media (min-width: 768px) {
      .note { padding: 1.5rem; }
    }
    .note article { border-inline-start: 0.4rem solid #e63946; padding-inline-start: 1.25rem; }
    .note img { width: 8rem; max-inline-size: 100%; float: left; margin-inline-end: 0.5rem; margin-block-end: 0.5rem; }
    @media (min-width: 768px) {
      .note img { margin-inline-end: 1rem; margin-block-end: 0.75rem; }
    }
    .note p { margin: 0; line-height: 1.75; }
    .translation { flex: 1; inline-size: 100%; font-size: 0.95rem; color: #6b7280; line-height: 1.7; display: flex; flex-direction: column; min-height: auto; padding-block: 0.5rem; padding-inline: 0; }
    @media (min-width: 768px) {
      .translation { min-height: 16rem; padding-block: 1rem; }
    }
    .translation p { flex: 1; margin: 0; }
    .translation img { width: 8rem; max-inline-size: 100%; align-self: flex-end; }

    .caption { margin-block-start: 0.5rem; border-block-start: 1px solid #e5e7eb; padding-block-start: 0.5rem; color: #6b7280; font-size: .875rem; }
    @media (min-width: 768px) {
      .caption { margin-block-start: 1.5rem; padding-block-start: 1rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenLanguageNotesComponent {}
