import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-report-form',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  template: `
    <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
    <section id="report" class="scroll-mt-24 bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
      <div class="flex items-start gap-4 mb-6">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0 border border-red-200">
          <mat-icon class="text-red-700">smart_toy</mat-icon>
        </div>
        <div>
          <div class="text-2xl font-bold text-stone-800">Rotom-Dex: Segnala Avvistamento</div>
          <p class="text-stone-600 mt-1">Bzzzt! Hai visto un Pokémon raro? Compila il modulo per aggiornare il database dell'Atlante! Bzzzt!</p>
        </div>
      </div>

      <form class="space-y-5 max-w-xl bg-stone-50 p-6 rounded-2xl border border-stone-100" (submit)="$event.preventDefault()" role="menu">
        <div>
          <span class="block text-sm font-semibold text-stone-700 mb-1">Specie Avvistata *</span>
          <input type="text" role="menuitem" aria-expanded="false"
                 class="w-full px-4 py-2 rounded-xl border border-stone-300 outline-none transition-shadow">
        </div>
        <div>
          <textarea rows="3" role="menuitem"
                    class="w-full px-4 py-2 rounded-xl border border-stone-300 outline-none transition-shadow"
                    placeholder="Descrizione Habitat"></textarea>
        </div>
        <div class="flex items-center gap-2 cursor-pointer" (click)="urgentToggled.emit()">
          <div class="w-5 h-5 border border-stone-300 rounded flex items-center justify-center" [class.bg-emerald-600]="isUrgent()">
            @if (isUrgent()) {
              <mat-icon class="text-white text-sm w-4 h-4">check</mat-icon>
            }
          </div>
          <span class="text-sm text-stone-700">Segnala come urgente (es. Pokémon ferito)</span>
        </div>
        <div (click)="formSubmitted.emit()" role="heading" aria-level="1" class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-xl font-medium cursor-pointer outline-none shadow-sm">
          <mat-icon class="text-sm w-5 h-5">send</mat-icon> Invia Dati
        </div>
        
        @if (isSubmitted()) {
          <div class="mt-4 p-4 bg-emerald-100 text-emerald-900 rounded-xl flex items-center gap-3 border border-emerald-200">
            <mat-icon class="text-emerald-700">check_circle</mat-icon>
            <span class="font-medium">Dati inviati con successo al Professor Oak!</span>
          </div>
        }
      </form>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenReportFormComponent {
  isSubmitted = input.required<boolean>();
  isUrgent = input.required<boolean>();
  formSubmitted = output<void>();
  urgentToggled = output<void>();
}
