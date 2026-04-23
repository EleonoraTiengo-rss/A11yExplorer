import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-species',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  host: { class: 'block' },
  template: `
    <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
    <section id="species" class="scroll-mt-24 bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
      @if (isAccessible()) {
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
      } @else {
        <div class="text-2xl font-bold text-stone-800 mb-6">Appunti di Campo: Specie Endemiche</div>
        <div class="space-y-4">
          <div class="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
            <div (click)="panelToggled.emit(1)" class="p-5 font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 outline-none flex justify-between items-center">
              Caterpie (Comportamento)
              <mat-icon class="text-stone-400 transition-transform" [class.rotate-180]="openPanel() === 1">expand_more</mat-icon>
            </div>
            <div class="border-t border-stone-200 text-stone-600 bg-white transition-all duration-300"
                 [ngStyle]="{'opacity': openPanel() === 1 ? '1' : '0', 'height': openPanel() === 1 ? 'auto' : '0px', 'overflow': openPanel() === 1 ? 'visible' : 'hidden'}">
              <div class="p-5 leading-relaxed">
                Caterpie si nutre prevalentemente di foglie di Baccapesca. Il suo odore respinge i predatori alati come Pidgey. È molto docile e facile da catturare per i giovani allenatori.
                <div class="mt-4">
                  <div (click)="scrollToRequested.emit({id: 'caterpie-entry', focusOnly: false, noFocus: false})" class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer outline-none">
                    <mat-icon class="text-sm w-4 h-4">menu_book</mat-icon> Apri scheda Pokédex
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
            <div (click)="panelToggled.emit(2)" class="p-5 font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 outline-none flex justify-between items-center">
              Weedle (Tossicologia)
              <mat-icon class="text-stone-400 transition-transform" [class.rotate-180]="openPanel() === 2">expand_more</mat-icon>
            </div>
            <div class="border-t border-stone-200 text-stone-600 bg-white transition-all duration-300"
                 [ngStyle]="{'opacity': openPanel() === 2 ? '1' : '0', 'height': openPanel() === 2 ? 'auto' : '0px', 'overflow': openPanel() === 2 ? 'visible' : 'hidden'}">
              <div class="p-5 leading-relaxed">
                Il veleno del pungiglione di Weedle è un neurotossico leggero. Viene studiato per applicazioni mediche nella regione di Kanto. Attenzione a dove metti i piedi!
                <div class="mt-4">
                  <div (click)="scrollToRequested.emit({id: 'weedle-entry', focusOnly: false, noFocus: false})" class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer outline-none">
                    <mat-icon class="text-sm w-4 h-4">menu_book</mat-icon> Apri scheda Pokédex
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
            <div (click)="panelToggled.emit(3)" class="p-5 font-semibold text-lg text-stone-800 cursor-pointer hover:bg-stone-100 outline-none flex justify-between items-center">
              Bulbasaur (Simbiosi)
              <mat-icon class="text-stone-400 transition-transform" [class.rotate-180]="openPanel() === 3">expand_more</mat-icon>
            </div>
            <div class="border-t border-stone-200 text-stone-600 bg-white transition-all duration-300"
                 [ngStyle]="{'opacity': openPanel() === 3 ? '1' : '0', 'height': openPanel() === 3 ? 'auto' : '0px', 'overflow': openPanel() === 3 ? 'visible' : 'hidden'}">
              <div class="p-5 leading-relaxed">
                Il bulbo sulla schiena di Bulbasaur è piantato alla nascita. Cresce in simbiosi con il Pokémon, fornendogli energia attraverso la fotosintesi. Spesso si crogiola al sole nelle radure della foresta.
                <div class="mt-4">
                  <div (click)="scrollToRequested.emit({id: 'bulbasaur-entry', focusOnly: false, noFocus: false})" class="inline-flex items-center gap-1 text-emerald-700 font-medium cursor-pointer outline-none">
                    <mat-icon class="text-sm w-4 h-4">menu_book</mat-icon> Apri scheda Pokédex
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSpeciesComponent {
  isAccessible = input.required<boolean>();
  openPanel = input<number | null>();
  panelToggled = output<number>();
  scrollToRequested = output<{id: string, focusOnly?: boolean, noFocus?: boolean}>();
}
