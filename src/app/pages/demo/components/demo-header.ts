import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-header',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <header class="bg-emerald-900 text-stone-50 flex flex-col sm:flex-row justify-between items-center shadow-md gap-4 sticky z-40"
            style="padding-block: 1rem; padding-inline: 1rem; inset-block-start: 0;">
      <div class="flex items-center gap-3">
        <mat-icon class="text-amber-400">explore</mat-icon>
        <h1 class="text-2xl font-bold text-amber-50 tracking-wide">Atlante del Mondo Pokémon</h1>
      </div>
      
      <div class="flex items-center gap-3 bg-emerald-950/50 rounded-xl border border-emerald-800/50"
           style="padding-block: 0.5rem; padding-inline: 0.5rem;">
        <span class="text-sm font-medium text-stone-300" aria-hidden="true">Non Accessibile</span>
        <button 
          (click)="accessibilityToggled.emit()"
          class="relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900 cursor-pointer bg-amber-500"
          role="switch"
          aria-checked="true"
          aria-label="Modalità accessibile">
          <span class="inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm translate-x-8"></span>
        </button>
        <span class="text-sm font-medium text-amber-400" aria-hidden="true">Accessibile</span>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHeaderComponent {
  accessibilityToggled = output<void>();
}
