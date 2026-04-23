import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { DemoHeaderComponent } from './components/demo-header';
import { DemoHeroComponent } from './components/demo-hero';
import { DemoHabitatComponent } from './components/demo-habitat';
import { DemoSpeciesComponent } from './components/demo-species';
import { DemoPokedexComponent } from './components/demo-pokedex';
import { DemoReportFormComponent } from './components/demo-report-form';
import { DemoTerminalComponent } from './components/demo-terminal';
import { DemoPopupComponent } from './components/demo-popup';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    MatIconModule, 
    CommonModule,
    DemoHeaderComponent,
    DemoHeroComponent,
    DemoHabitatComponent,
    DemoSpeciesComponent,
    DemoPokedexComponent,
    DemoReportFormComponent,
    DemoTerminalComponent,
    DemoPopupComponent
  ],
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

  scrollTo(params: {id: string, focusOnly?: boolean, noFocus?: boolean}) {
    const { id, focusOnly = false, noFocus = false } = params;
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
}
