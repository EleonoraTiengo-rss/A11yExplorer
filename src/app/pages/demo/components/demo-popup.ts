import { Component, ChangeDetectionStrategy, input, output, ElementRef, viewChild, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-popup',
  standalone: true,
  imports: [MatIconModule],
  template: `
    @if (showPopup()) {
      <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
      <div class="fixed flex items-center justify-center z-50" 
           style="inset-block: 0; inset-inline: 0; background-color: rgba(28, 25, 23, 0.8); backdrop-filter: blur(4px); padding-block: 1rem; padding-inline: 1rem;" 
           (click)="popupClosed.emit()">
        <div 
          #accessiblePopup
          role="alertdialog" 
          aria-modal="true" 
          aria-labelledby="popup-title"
          aria-describedby="popup-desc"
          class="bg-white rounded-3xl shadow-2xl max-w-md w-full border-2 border-red-100 outline-none"
          style="padding-block: 2rem; padding-inline: 2rem;"
          (click)="$event.stopPropagation()"
          tabindex="-1">
          
          <div class="flex items-center gap-3 text-red-600" style="margin-block-end: 1rem;">
            <mat-icon class="text-3xl">warning</mat-icon>
            <h2 id="popup-title" class="text-2xl font-bold text-stone-800">Disconnessione Imminente</h2>
          </div>
          
          <p id="popup-desc" class="text-stone-600 text-lg" style="margin-block-end: 2rem;">
            La sessione del terminale terminerà presto se non confermi la tua presenza.
          </p>
          
          <div class="bg-stone-50 rounded-2xl border border-stone-100" 
               style="margin-block-end: 2rem; padding-block: 1rem; padding-inline: 1rem;">
            <div class="flex justify-between text-sm font-bold text-stone-700" style="margin-block-end: 0.5rem;">
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
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPopupComponent {
  showPopup = input.required<boolean>();
  timeLeft = input.required<number>();
  popupClosed = output<void>();

  popupElement = viewChild<ElementRef>('accessiblePopup');

  constructor() {
    effect(() => {
      if (this.showPopup()) {
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
