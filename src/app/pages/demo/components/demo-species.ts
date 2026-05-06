import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-species',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  host: { class: 'block' },
  template: `
    <section id="species" class="scroll-mt-24 bg-white rounded-3xl shadow-sm border border-stone-200"
             style="padding-block: 2rem; padding-inline: 2rem;">
      <h2 class="text-2xl font-bold text-stone-800" style="margin-block-end: 1.5rem;">Appunti di Campo: Specie Endemiche</h2>
      <div class="space-y-4">
        <details class="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
          <summary class="font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 focus:outline-none focus-visible:bg-stone-100 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-emerald-500 flex justify-between items-center"
                   style="padding-block: 1.25rem; padding-inline: 1.25rem;">
            Caterpie (Comportamento)
            <mat-icon class="text-stone-600 group-open:rotate-180 transition-transform">expand_more</mat-icon>
          </summary>
          <div class="border-t border-stone-200 text-stone-600 bg-white leading-relaxed" 
               style="padding-block: 1.25rem; padding-inline: 1.25rem;">
            Caterpie si nutre prevalentemente di foglie di Baccapesca. Il suo odore respinge i predatori alati come Pidgey. È molto docile e facile da catturare per i giovani allenatori.
            <div style="margin-block-start: 1rem;">
              <button (click)="scrollToRequested.emit({id: 'caterpie-entry'})" 
                      class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer hover:text-emerald-800 hover:underline focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500 rounded transition-colors"
                      style="padding-block: 0.25rem; padding-inline: 0.5rem; margin-inline-start: -0.5rem;">
                <mat-icon class="text-sm w-4 h-4">menu_book</mat-icon> Apri scheda Pokédex
              </button>
            </div>
          </div>
        </details>
        <details class="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
          <summary class="font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 focus:outline-none focus-visible:bg-stone-100 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-emerald-500 flex justify-between items-center"
                   style="padding-block: 1.25rem; padding-inline: 1.25rem;">
            Weedle (Tossicologia)
            <mat-icon class="text-stone-600 group-open:rotate-180 transition-transform">expand_more</mat-icon>
          </summary>
          <div class="border-t border-stone-200 text-stone-600 bg-white leading-relaxed"
               style="padding-block: 1.25rem; padding-inline: 1.25rem;">
            Il veleno del pungiglione di Weedle è un neurotossico leggero. Viene studiato per applicazioni mediche nella regione di Kanto. Attenzione a dove metti i piedi!
            <div style="margin-block-start: 1rem;">
              <button (click)="scrollToRequested.emit({id: 'weedle-entry'})" 
                      class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer hover:text-emerald-800 hover:underline focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500 rounded transition-colors"
                      style="padding-block: 0.25rem; padding-inline: 0.5rem; margin-inline-start: -0.5rem;">
                <mat-icon class="text-sm w-4 h-4">menu_book</mat-icon> Apri scheda Pokédex
              </button>
            </div>
          </div>
        </details>
        <details class="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
          <summary class="font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 focus:outline-none focus-visible:bg-stone-100 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-emerald-500 flex justify-between items-center"
                   style="padding-block: 1.25rem; padding-inline: 1.25rem;">
            Bulbasaur (Simbiosi)
            <mat-icon class="text-stone-600 group-open:rotate-180 transition-transform">expand_more</mat-icon>
          </summary>
          <div class="border-t border-stone-200 text-stone-600 bg-white leading-relaxed"
               style="padding-block: 1.25rem; padding-inline: 1.25rem;">
            Il bulbo sulla schiena di Bulbasaur è piantato alla nascita. Cresce in simbiosi con il Pokémon, fornendogli energia attraverso la fotosintesi. Spesso si crogiola al sole nelle radure della foresta.
            <div style="margin-block-start: 1rem;">
              <button (click)="scrollToRequested.emit({id: 'bulbasaur-entry'})" 
                      class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer hover:text-emerald-800 hover:underline focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500 rounded transition-colors"
                      style="padding-block: 0.25rem; padding-inline: 0.5rem; margin-inline-start: -0.5rem;">
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
