import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";

import { DemoHeaderComponent } from "./components/demo-header.component";
import { DemoHeroComponent } from "./components/demo-hero.component";
import { BrokenHeroComponent } from "./components/broken-hero.component";
import { DemoHeroNavComponent } from "./components/demo-hero-nav.component";
import { BrokenHeroNavComponent } from "./components/broken-hero-nav.component";
import { DemoHabitatComponent } from "./components/demo-habitat.component";
import { BrokenHabitatComponent } from "./components/broken-habitat.component";
import { DemoSpeciesComponent } from "./components/demo-species.component";
import { BrokenSpeciesComponent } from "./components/broken-species.component";
import { DemoPokedexComponent } from "./components/demo-pokedex.component";
import { BrokenPokedexComponent } from "./components/broken-pokedex.component";
import { DemoReportFormComponent } from "./components/demo-report-form.component";
import { BrokenReportFormComponent } from "./components/broken-report-form.component";
import { DemoTerminalComponent } from "./components/demo-terminal.component";
import { BrokenTerminalComponent } from "./components/broken-terminal.component";
import { DemoPopupComponent } from "./components/demo-popup.component";
import { BrokenPopupComponent } from "./components/broken-popup.component";
import { DemoLanguageNotesComponent } from "./components/demo-language-notes.component";
import { BrokenLanguageNotesComponent } from "./components/broken-language-notes.component";
import { fromEvent, take } from "rxjs";

@Component({
  selector: "app-demo",
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    DemoHeaderComponent,
    DemoHeroComponent,
    BrokenHeroComponent,
    DemoHeroNavComponent,
    BrokenHeroNavComponent,
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
    BrokenLanguageNotesComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./demo.component.html",
})
export class DemoComponent {
  isAccessible = signal(true);
  openPanel = signal<number | null>(null);
  isUrgent = signal(false);
  isSubmitted = signal(false);

  showPopup = signal(false);

  toggleAccessibility(value: boolean): void {
    this.isAccessible.set(value);
    this.openPanel.set(null);
    this.closePopup();
    this.isSubmitted.set(false);
  }

  togglePanel(id: number) {
    this.openPanel.update((current) => (current === id ? null : id));
  }

  toggleUrgent() {
    this.isUrgent.update((v) => !v);
  }

  submitForm() {
    this.isSubmitted.set(true);
    setTimeout(() => this.isSubmitted.set(false), 4000);
  }

  scrollTo(params: { id: string; focusOnly?: boolean; noFocus?: boolean }) {
    const { id, focusOnly = false, noFocus = false } = params;
    const element = document.getElementById(id);
    if (element) {
      if (!focusOnly) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (!noFocus) {
        const heading = element.querySelector("h1, h2, h3, h4, h5, h6");
        if (heading) {
          if (!heading.hasAttribute("tabindex")) {
            heading.setAttribute("tabindex", "-1");
          }
          (heading as HTMLElement).focus({ preventScroll: focusOnly });
          fromEvent(heading, "blur")
            .pipe(take(1))
            .subscribe(() => {
              heading.removeAttribute("tabindex");
            });
        }
      }
    }
  }

  openPopup() {
    this.showPopup.set(true);
  }

  closePopup() {
    this.showPopup.set(false);
  }
}
