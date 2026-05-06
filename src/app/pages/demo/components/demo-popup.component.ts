import { Component, ChangeDetectionStrategy, input, output, ElementRef, viewChild, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-popup',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './demo-popup.component.html',
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
