import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-header',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <header class="bg-emerald-900 text-stone-50 p-4 flex flex-col sm:flex-row justify-between items-center shadow-md gap-4 sticky top-0 z-40">
      <div class="flex items-center gap-3">
        <mat-icon class="text-amber-400">explore</mat-icon>
        @if (isAccessible()) {
          <h1 class="text-2xl font-bold text-amber-50 tracking-wide">Atlante del Mondo Pokémon</h1>
        } @else {
          <div class="text-2xl font-bold text-amber-50 tracking-wide">Atlante del Mondo Pokémon</div>
        }
      </div>
      
      <div class="flex items-center gap-3 bg-emerald-950/50 p-2 rounded-xl border border-emerald-800/50">
        <span class="text-sm font-medium" [class.text-amber-400]="!isAccessible()" [class.text-stone-300]="isAccessible()" aria-hidden="true">Non Accessibile</span>
        <button 
          (click)="accessibilityToggled.emit()"
          class="relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900 cursor-pointer"
          [class.bg-amber-500]="isAccessible()"
          [class.bg-stone-500]="!isAccessible()"
          role="switch"
          [attr.aria-checked]="isAccessible()"
          aria-label="Modalità accessibile">
          <span 
            class="inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm"
            [class.translate-x-8]="isAccessible()"
            [class.translate-x-1]="!isAccessible()">
          </span>
        </button>
        <span class="text-sm font-medium" [class.text-amber-400]="isAccessible()" [class.text-stone-300]="!isAccessible()" aria-hidden="true">Accessibile</span>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHeaderComponent {
  isAccessible = input.required<boolean>();
  accessibilityToggled = output<void>();
}
