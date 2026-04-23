import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-learn-hero',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="mb-16 text-center">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold tracking-wide mb-6 border border-red-100">
        <mat-icon class="text-red-500 text-sm w-4 h-4">explore</mat-icon>
        ACCADEMIA ALLENATORI
      </div>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu che saluta" class="w-32 h-32 mx-auto mb-4 drop-shadow-md hover:scale-110 transition-transform" referrerpolicy="no-referrer" />
      <h2 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
        Benvenuto all'Accademia dell'Accessibilità! ✨
      </h2>
      <p class="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
        Proprio come un buon Allenatore si prende cura di tutti i suoi Pokémon, un vero Maestro Sviluppatore crea siti web perfetti per <strong class="text-slate-900">tutti gli utenti</strong>! 🌍🤝
      </p>
    </section>

    <section class="prose prose-lg prose-slate max-w-none mb-16">
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <p class="text-lg leading-relaxed mb-4">
          Nel mondo digitale, l'accessibilità è la tua mossa più potente! 💥 Significa permettere a chiunque di esplorare il tuo sito senza incontrare ostacoli (o Snorlax addormentati sul percorso! 💤).
        </p>
        <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100 mt-6">
          <mat-icon class="text-blue-600 mt-1">lightbulb</mat-icon>
          <p class="text-blue-900 m-0 font-medium">
            Il consiglio del Prof. Oak: progettare per l'accessibilità migliora l'esperienza per tutti. È super efficace! 🌟
          </p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LearnHeroComponent {}
