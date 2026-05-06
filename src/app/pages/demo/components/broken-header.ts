import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-header',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <header class="bg-emerald-900 text-stone-50 p-4 flex flex-col sm:flex-row justify-between items-center shadow-md gap-4 sticky top-0 z-40">
      <div class="flex items-center gap-3">
        <mat-icon class="text-amber-400">explore</mat-icon>
        <div class="text-2xl font-bold text-amber-50 tracking-wide">Atlante del Mondo Pokémon</div>
      </div>
      
      <div class="flex items-center gap-3 bg-emerald-950/50 p-2 rounded-xl border border-emerald-800/50">
        <span class="text-sm font-medium text-amber-400" aria-hidden="true">Non Accessibile</span>
        <button 
          (click)="accessibilityToggled.emit()"
          class="relative inline-flex h-7 w-14 items-center rounded-full transition-colors cursor-pointer bg-stone-500 hover:bg-stone-400 transition-colors">
          <span class="inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm translate-x-1"></span>
        </button>
        <span class="text-sm font-medium text-stone-300" aria-hidden="true">Accessibile</span>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenHeaderComponent {
  accessibilityToggled = output<void>();
}
