import { Component, ChangeDetectionStrategy, input, output, ElementRef, viewChild, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-popup',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
    @if (showPopup()) {
      @if (isAccessible()) {
        <div class="fixed inset-0 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" (click)="popupClosed.emit()">
          <div 
            #accessiblePopup
            role="alertdialog" 
            aria-modal="true" 
            aria-labelledby="popup-title"
            aria-describedby="popup-desc"
            class="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border-2 border-red-100 outline-none"
            (click)="$event.stopPropagation()"
            tabindex="-1">
            
            <div class="flex items-center gap-3 mb-4 text-red-600">
              <mat-icon class="text-3xl">warning</mat-icon>
              <h2 id="popup-title" class="text-2xl font-bold text-stone-800">Disconnessione Imminente</h2>
            </div>
            
            <p id="popup-desc" class="text-stone-600 mb-8 text-lg">
              La sessione del terminale terminerà presto se non confermi la tua presenza.
            </p>
            
            <div class="mb-8 bg-stone-50 p-4 rounded-2xl border border-stone-100">
              <div class="flex justify-between text-sm font-bold text-stone-700 mb-2">
                <span>Tempo rimanente</span>
                <span aria-live="polite" aria-atomic="true" class="text-red-700">{{ timeLeft() }} secondi</span>
              </div>
              <div class="w-full bg-stone-200 rounded-full h-3 overflow-hidden" role="progressbar" [attr.aria-valuenow]="timeLeft()" aria-valuemin="0" aria-valuemax="60">
                <div class="bg-red-500 h-full rounded-full transition-all duration-1000 ease-linear" [style.width.%]="(timeLeft() / 60) * 100"></div>
              </div>
            </div>

            <div class="flex justify-end gap-3">
              <button (click)="popupClosed.emit()" class="px-6 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-bold cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-stone-200 transition-colors">
                Esci
              </button>
              <button (click)="popupClosed.emit()" class="px-6 py-3 bg-red-700 text-white rounded-xl font-bold cursor-pointer hover:bg-red-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-500/50 transition-colors shadow-md">
                Resta connesso
              </button>
            </div>
          </div>
        </div>
      } @else {
        <div class="fixed inset-0 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div class="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border-2 border-red-100">
            
            <div class="flex items-center gap-3 mb-4 text-red-600">
              <mat-icon class="text-3xl">warning</mat-icon>
              <div class="text-2xl font-bold text-stone-800">Disconnessione Imminente</div>
            </div>
            
            <div class="text-stone-600 mb-8 text-lg">
              La sessione del terminale terminerà presto se non confermi la tua presenza.
            </div>
            
            <div class="mb-8 bg-stone-50 p-4 rounded-2xl border border-stone-100">
              <div class="flex justify-between text-sm font-bold text-stone-700 mb-2">
                <span>Tempo rimanente</span>
                <span class="text-red-600">{{ timeLeft() }} secondi</span>
              </div>
              <div class="w-full bg-stone-200 rounded-full h-3 overflow-hidden">
                <div class="bg-red-500 h-full rounded-full transition-all duration-1000 ease-linear" [style.width.%]="(timeLeft() / 10) * 100"></div>
              </div>
            </div>

            <div class="flex justify-end gap-3">
              <div (click)="popupClosed.emit()" class="px-6 py-3 text-stone-600 hover:bg-stone-100 rounded-xl font-bold cursor-pointer outline-none transition-colors">
                Esci
              </div>
              <div (click)="popupClosed.emit()" class="px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 cursor-pointer outline-none transition-colors shadow-md">
                Resta connesso
              </div>
            </div>
          </div>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPopupComponent {
  showPopup = input.required<boolean>();
  isAccessible = input.required<boolean>();
  timeLeft = input.required<number>();
  popupClosed = output<void>();

  popupElement = viewChild<ElementRef>('accessiblePopup');

  constructor() {
    effect(() => {
      if (this.showPopup() && this.isAccessible()) {
        this.playSound();
        const el = this.popupElement();
        if (el) {
          setTimeout(() => el.nativeElement.focus(), 50);
        }
      }
    });
  }

  private playSound() {
    try {
      const audioCtx = new (window.AudioContext || (window as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext!)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); 
      oscillator.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch {
      // Ignora errori audio se il browser blocca l'autoplay
    }
  }
}
