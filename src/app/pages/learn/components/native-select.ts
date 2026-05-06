import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-native-select',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="flex flex-col gap-2 relative">
      <label for="poke-select" class="text-sm font-medium text-slate-700">Scegli il tuo Pokémon:</label>
      <div class="relative">
        <select id="poke-select" class="w-full h-10 px-3 pr-10 bg-white border border-slate-300 rounded-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-none cursor-default appearance-none text-slate-900 text-sm">
          @for (poke of pokes(); track poke.id) {
            <option [value]="poke.id">{{ poke.name }} ({{ poke.type }})</option>
          }
        </select>
        <mat-icon class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none text-lg">expand_more</mat-icon>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NativeSelectComponent {
  pokes = input.required<{ id: string, name: string, type: string }[]>();
}
