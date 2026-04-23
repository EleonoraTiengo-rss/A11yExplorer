import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-habitat',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  template: `
    <section id="habitat" class="scroll-mt-24 bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
      @if (isAccessible()) {
        <h2 class="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <mat-icon class="text-emerald-700">park</mat-icon> L'Ecosistema
        </h2>
        <div class="rounded-2xl overflow-hidden mb-6 border border-stone-200 shadow-sm">
          <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80" 
               alt="Una fitta foresta con alberi alti e raggi di luce solare che filtrano a fatica tra le foglie verdi, creando un'atmosfera umida e ombrosa." 
               class="w-full h-64 object-cover"
               referrerpolicy="no-referrer">
        </div>
      } @else {
        <div class="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
          <mat-icon class="text-emerald-700">park</mat-icon> L'Ecosistema
        </div>
        <div class="rounded-2xl overflow-hidden mb-6 border border-stone-200 shadow-sm">
          <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80" 
               alt="forest_bg_final_v2.jpg" 
               class="w-full h-64 object-cover"
               referrerpolicy="no-referrer">
        </div>
      }
      <p class="text-stone-600 leading-relaxed text-lg">
        La Foresta Smeraldo è un ecosistema chiuso. Gli alberi secolari sono così fitti da bloccare quasi completamente la luce del sole, mantenendo un'umidità costante dell'85%. Questo ambiente è il paradiso terrestre per i Pokémon di tipo Coleottero e Erba, che trovano riparo tra le radici giganti e nutrimento nelle bacche cadute.
      </p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoHabitatComponent {
  isAccessible = input.required<boolean>();
}
