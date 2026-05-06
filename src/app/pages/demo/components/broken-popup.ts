import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-popup',
  standalone: true,
  imports: [MatIconModule],
  template: `
    @if (showPopup()) {
      <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
      <div class="fixed inset-0 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" (click)="popupClosed.emit()">
        <div class="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border-2 border-red-100 outline-none" (click)="$event.stopPropagation()">
          
          <div class="flex items-center gap-3 mb-4 text-red-600">
            <mat-icon class="text-3xl">warning</mat-icon>
            <div class="text-2xl font-bold text-stone-800">Disconnessione Imminente</div>
          </div>
          
          <p class="text-stone-600 mb-8 text-lg">
            La sessione del terminale terminerà presto se non confermi la tua presenza.
          </p>
          
          <div class="mb-8 bg-stone-50 p-4 rounded-2xl border border-stone-100">
            <div class="flex justify-between text-sm font-bold text-stone-700 mb-2">
              <span>Tempo rimanente</span>
              <span class="text-red-700">{{ timeLeft() }} secondi</span>
            </div>
            <div class="w-full bg-stone-200 rounded-full h-3 overflow-hidden">
              <div class="bg-red-500 h-full rounded-full transition-all duration-1000 ease-linear" [style.width.%]="(timeLeft() / 10) * 100"></div>
            </div>
          </div>

          <div class="flex justify-end gap-3">
            <div (click)="popupClosed.emit()" class="px-6 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-bold cursor-pointer transition-colors">
              Esci
            </div>
            <div (click)="popupClosed.emit()" class="px-6 py-3 bg-red-700 text-white rounded-xl font-bold cursor-pointer hover:bg-red-800 transition-colors shadow-md">
              Resta connesso
            </div>
          </div>
        </div>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenPopupComponent {
  showPopup = input.required<boolean>();
  timeLeft = input.required<number>();
  popupClosed = output<void>();
}
