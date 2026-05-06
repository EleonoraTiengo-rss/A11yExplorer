import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-hero',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  template: `
    <section class="bg-white rounded-3xl shadow-sm border border-stone-200 relative overflow-hidden"
             style="padding-block: 2rem; padding-inline: 2rem;">
      <div class="absolute w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"
           style="inset-block-start: 0; inset-inline-end: 0; margin-inline-end: -5rem; margin-block-start: -5rem;"></div>
      
      <div class="flex flex-col md:flex-row gap-8 items-center relative z-10">
        <div class="flex-1">
          <h2 class="text-3xl font-bold text-stone-800" style="margin-block-end: 1rem;">Laboratorio di Ricerca Pokémon</h2>
          <p class="text-stone-600 leading-relaxed text-lg" style="margin-block-end: 1.5rem;">
            Benvenuto nel laboratorio centrale, Allenatore! Da qui coordiniamo tutte le nostre spedizioni. 
            Oggi ci concentreremo sullo studio degli ecosistemi e sulla catalogazione di nuove specie. 
            Scegli un'attività per iniziare la tua ricerca sul campo.
          </p>

          <div class="flex flex-wrap gap-4">
            <button (click)="scrollToRequested.emit({id: 'habitat'})" class="px-6 py-3 bg-emerald-700 text-white rounded-xl font-medium cursor-pointer hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 transition-all flex items-center gap-2 shadow-sm">
              <mat-icon class="text-sm w-5 h-5">landscape</mat-icon>
              Esplora Habitat
            </button>
            <button (click)="scrollToRequested.emit({id: 'species'})" class="px-6 py-3 bg-amber-500 text-stone-900 rounded-xl font-medium cursor-pointer hover:bg-amber-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/50 transition-all flex items-center gap-2 shadow-sm">
              <mat-icon class="text-sm w-5 h-5">menu_book</mat-icon>
              Consulta Appunti
            </button>
            <button (click)="scrollToRequested.emit({id: 'report'})" class="px-6 py-3 bg-red-700 text-white rounded-xl font-medium cursor-pointer hover:bg-red-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500/50 transition-all flex items-center gap-2 shadow-sm">
              <mat-icon class="text-sm w-5 h-5">campaign</mat-icon>
              Segnala Avvistamento
            </button>
          </div>
        </div>
        <div class="w-full md:w-1/3 shrink-0">
          <img src="assets/images/pokemon-133.png" 
               role="presentation"
               alt="" 
               class="w-full h-auto object-contain drop-shadow-xl">
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHeroComponent {
  scrollToRequested = output<{id: string, focusOnly?: boolean, noFocus?: boolean}>();
}
