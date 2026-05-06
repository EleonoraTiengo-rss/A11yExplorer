import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-species',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  host: { class: 'block' },
  template: `
    <section id="species" class="scroll-mt-24 bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
      <h2 class="text-2xl font-bold text-stone-800 mb-6">Appunti di Campo: Specie Endemiche</h2>
      <div class="space-y-4">
        <details class="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
          <summary class="p-5 font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 focus:outline-none focus-visible:bg-stone-100 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-emerald-500 flex justify-between items-center">
            Caterpie (Comportamento)
            <mat-icon class="text-stone-600 group-open:rotate-180 transition-transform">expand_more</mat-icon>
          </summary>
          <div class="p-5 border-t border-stone-200 text-stone-600 bg-white leading-relaxed">
            Caterpie si nutre prevalentemente di foglie di Baccapesca. Il suo odore respinge i predatori alati come Pidgey. È molto docile e facile da catturare per i giovani allenatori.
            <div class="mt-4">
              <button (click)="scrollToRequested.emit({id: 'caterpie-entry'})" class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer hover:text-emerald-800 hover:underline focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500 rounded px-2 py-1 -ml-2 transition-colors">
                <mat-icon class="text-sm w-4 h-4">menu_book</mat-icon> Apri scheda Pokédex
              </button>
            </div>
          </div>
        </details>
        <details class="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
          <summary class="p-5 font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 focus:outline-none focus-visible:bg-stone-100 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-emerald-500 flex justify-between items-center">
            Weedle (Tossicologia)
            <mat-icon class="text-stone-600 group-open:rotate-180 transition-transform">expand_more</mat-icon>
          </summary>
          <div class="p-5 border-t border-stone-200 text-stone-600 bg-white leading-relaxed">
            Il veleno del pungiglione di Weedle è un neurotossico leggero. Viene studiato per applicazioni mediche nella regione di Kanto. Attenzione a dove metti i piedi!
            <div class="mt-4">
              <button (click)="scrollToRequested.emit({id: 'weedle-entry'})" class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer hover:text-emerald-800 hover:underline focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500 rounded px-2 py-1 -ml-2 transition-colors">
                <mat-icon class="text-sm w-4 h-4">menu_book</mat-icon> Apri scheda Pokédex
              </button>
            </div>
          </div>
        </details>
        <details class="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
          <summary class="p-5 font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 focus:outline-none focus-visible:bg-stone-100 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-emerald-500 flex justify-between items-center">
            Bulbasaur (Simbiosi)
            <mat-icon class="text-stone-600 group-open:rotate-180 transition-transform">expand_more</mat-icon>
          </summary>
          <div class="p-5 border-t border-stone-200 text-stone-600 bg-white leading-relaxed">
            Il bulbo sulla schiena di Bulbasaur è piantato alla nascita. Cresce in simbiosi con il Pokémon, fornendogli energia attraverso la fotosintesi. Spesso si crogiola al sole nelle radure della foresta.
            <div class="mt-4">
              <button (click)="scrollToRequested.emit({id: 'bulbasaur-entry'})" class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer hover:text-emerald-800 hover:underline focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500 rounded px-2 py-1 -ml-2 transition-colors">
                <mat-icon class="text-sm w-4 h-4">menu_book</mat-icon> Apri scheda Pokédex
              </button>
            </div>
          </div>
        </details>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSpeciesComponent {
  scrollToRequested = output<{id: string, focusOnly?: boolean, noFocus?: boolean}>();
}
