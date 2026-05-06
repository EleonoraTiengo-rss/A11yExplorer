import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-report-form',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  template: `
    <section id="report" class="scroll-mt-24 bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
      <div class="flex items-start gap-4 mb-6">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0 border border-red-200">
          <mat-icon class="text-red-700">smart_toy</mat-icon>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-stone-800">Rotom-Dex: Segnala Avvistamento</h2>
          <p class="text-stone-600 mt-1">Bzzzt! Hai visto un Pokémon raro? Compila il modulo per aggiornare il database dell'Atlante! Bzzzt!</p>
        </div>
      </div>

      <form class="space-y-5 max-w-xl bg-stone-50 p-6 rounded-2xl border border-stone-100" (submit)="$event.preventDefault(); formSubmitted.emit()">
        <div>
          <label for="pokemon-name" class="block text-sm font-semibold text-stone-700 mb-1">Specie Avvistata <span class="text-red-700" aria-hidden="true">*</span></label>
          <input type="text" id="pokemon-name" required aria-required="true"
                 class="w-full px-4 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 invalid:focus:ring-red-500 invalid:focus:border-red-500 transition-shadow"
                 placeholder="es. Pikachu">
        </div>
        <div>
          <label for="habitat-desc" class="block text-sm font-semibold text-stone-700 mb-1">Descrizione Habitat</label>
          <textarea id="habitat-desc" rows="3"
                    class="w-full px-4 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 invalid:focus:ring-red-500 invalid:focus:border-red-500 transition-shadow"
                 placeholder="Descrivi dove l'hai visto..."></textarea>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="urgent" class="w-5 h-5 text-emerald-600 rounded border-stone-300 focus:ring-emerald-500 cursor-pointer">
          <label for="urgent" class="text-sm text-stone-700 cursor-pointer">Segnala come urgente (es. Pokémon ferito)</label>
        </div>
        <button type="submit" class="px-6 py-3 bg-emerald-700 text-white rounded-xl font-medium cursor-pointer hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50 transition-all shadow-sm flex items-center gap-2">
          <mat-icon class="text-sm w-5 h-5">send</mat-icon> Invia Dati
        </button>
        
        @if (isSubmitted()) {
          <div class="mt-4 p-4 bg-emerald-100 text-emerald-900 rounded-xl flex items-center gap-3 border border-emerald-200 animate-in fade-in slide-in-from-bottom-2" role="status" aria-live="polite">
            <mat-icon class="text-emerald-700">check_circle</mat-icon>
            <span class="font-medium">Dati inviati con successo al Professor Oak!</span>
          </div>
        }
      </form>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoReportFormComponent {
  isSubmitted = input.required<boolean>();
  formSubmitted = output<void>();
}
