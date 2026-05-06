import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { DemoHeaderComponent } from './components/demo-header.component';
import { BrokenHeaderComponent } from './components/broken-header.component';
import { DemoHeroComponent } from './components/demo-hero.component';
import { BrokenHeroComponent } from './components/broken-hero.component';
import { DemoHabitatComponent } from './components/demo-habitat.component';
import { BrokenHabitatComponent } from './components/broken-habitat.component';
import { DemoSpeciesComponent } from './components/demo-species.component';
import { BrokenSpeciesComponent } from './components/broken-species.component';
import { DemoPokedexComponent } from './components/demo-pokedex.component';
import { BrokenPokedexComponent } from './components/broken-pokedex.component';
import { DemoReportFormComponent } from './components/demo-report-form.component';
import { BrokenReportFormComponent } from './components/broken-report-form.component';
import { DemoTerminalComponent } from './components/demo-terminal.component';
import { BrokenTerminalComponent } from './components/broken-terminal.component';
import { DemoPopupComponent } from './components/demo-popup.component';
import { BrokenPopupComponent } from './components/broken-popup.component';
import { DemoLanguageNotesComponent } from './components/demo-language-notes.component';
import { BrokenLanguageNotesComponent } from './components/broken-language-notes.component';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    MatIconModule, 
    CommonModule,
    DemoHeaderComponent,
    BrokenHeaderComponent,
    DemoHeroComponent,
    BrokenHeroComponent,
    DemoHabitatComponent,
    BrokenHabitatComponent,
    DemoSpeciesComponent,
    BrokenSpeciesComponent,
    DemoPokedexComponent,
    BrokenPokedexComponent,
    DemoReportFormComponent,
    BrokenReportFormComponent,
    DemoTerminalComponent,
    BrokenTerminalComponent,
    DemoPopupComponent,
    BrokenPopupComponent,
    DemoLanguageNotesComponent,
    BrokenLanguageNotesComponent
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

  announcementText = computed(() => {
    const t = this.timeLeft();
    if (t === 0) return 'disconnessione in corso';
    const rounded = Math.ceil(t / 10) * 10;
    return `${rounded} secondi rimanenti`;
  });

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
