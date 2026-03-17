import { Component, ChangeDetectionStrategy, signal, ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo.component.html'
})
export class DemoComponent {
  isAccessible = signal(true);
  openPanel = signal<number | null>(null);
  isUrgent = signal(false);
  isSubmitted = signal(false);
  
  showPopup = signal(false);
  timeLeft = signal(60);
  timer: ReturnType<typeof setInterval> | undefined;

  @ViewChild('accessiblePopup') accessiblePopup!: ElementRef;

  toggleAccessibility() {
    this.isAccessible.update(v => !v);
    this.openPanel.set(null);
    this.closePopup();
    this.isSubmitted.set(false);
  }

  togglePanel(id: number) {
    this.openPanel.update(current => current === id ? null : id);
  }

  toggleUrgent() {
    this.isUrgent.update(v => !v);
  }

  submitForm() {
    this.isSubmitted.set(true);
    setTimeout(() => this.isSubmitted.set(false), 4000);
  }

  scrollTo(id: string, focusOnly = false, noFocus = false) {
    const element = document.getElementById(id);
    if (element) {
      if (!focusOnly) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (!noFocus) {
        const heading = element.querySelector('h2, div.text-2xl');
        if (heading) {
          if (!heading.hasAttribute('tabindex')) {
            heading.setAttribute('tabindex', '-1');
          }
          (heading as HTMLElement).style.outline = 'none';
          (heading as HTMLElement).focus({ preventScroll: focusOnly });
        }
      }
    }
  }

  openPopup() {
    this.showPopup.set(true);
    this.timeLeft.set(this.isAccessible() ? 60 : 10);
    
    if (this.isAccessible()) {
      this.playSound();
      setTimeout(() => {
        if (this.accessiblePopup) {
          this.accessiblePopup.nativeElement.focus();
        }
      }, 50);
    }

    this.timer = setInterval(() => {
      this.timeLeft.update(t => {
        if (t <= 1) {
          this.closePopup();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  closePopup() {
    this.showPopup.set(false);
    if (this.timer) {
      clearInterval(this.timer);
    }
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
