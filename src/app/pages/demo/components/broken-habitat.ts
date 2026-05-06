import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-habitat',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  template: `
    <section id="habitat" class="scroll-mt-24 bg-white rounded-3xl shadow-sm border border-stone-200"
             style="padding-top: 2rem; padding-bottom: 2rem; padding-left: 2rem; padding-right: 2rem;">
      <div class="text-2xl font-bold text-stone-800 flex items-center gap-2" style="margin-bottom: 1.5rem;">
        <mat-icon class="text-emerald-700">park</mat-icon> L'Ecosistema
      </div>
      <div class="rounded-2xl overflow-hidden border border-stone-200 shadow-sm" style="margin-bottom: 1.5rem;">
        <img src="assets/images/background-forest.jpg" 
             alt="forest_bg_final_v2.jpg" 
             class="w-full h-64 object-cover">
      </div>
      <p class="text-stone-600 leading-relaxed text-lg">
        La Foresta Smeraldo è un ecosistema chiuso. Gli alberi secolari sono così fitti da bloccare quasi completamente la luce del sole, mantenendo un'umidità costante dell'85%. Questo ambiente è il paradiso terrestre per i Pokémon di tipo Coleottero e Erba, che trovano riparo tra le radici giganti e nutrimento nelle bacche cadute.
      </p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenHabitatComponent {}
