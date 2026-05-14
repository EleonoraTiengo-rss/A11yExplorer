import { Component, ChangeDetectionStrategy, output } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
export interface SpeciesNote {
  readonly id: string;
  readonly targetId: string;
  readonly title: string;
  readonly content: string;
}
@Component({
  selector: "app-demo-species",
  standalone: true,
  imports: [MatIconModule, CommonModule],
  host: { class: "block" },
  templateUrl: "./demo-species.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSpeciesComponent {
  scrollToRequested = output<{
    id: string;
    focusOnly?: boolean;
    noFocus?: boolean;
  }>();

  readonly notes: SpeciesNote[] = [
    {
      id: "caterpie-notes",
      targetId: "caterpie-entry",
      title: "Caterpie (Comportamento)",
      content:
        "Caterpie si nutre prevalentemente di foglie di Baccapesca. Il suo odore respinge i predatori alati come Pidgey. È molto docile e facile da catturare per i giovani allenatori.",
    },
    {
      id: "weedle-notes",
      targetId: "weedle-entry",
      title: "Weedle (Tossicologia)",
      content:
        "Il veleno del pungiglione di Weedle è un neurotossico leggero. Viene studiato per applicazioni mediche nella regione di Kanto. Attenzione a dove metti i piedi!",
    },
    {
      id: "bulbasaur-notes",
      targetId: "bulbasaur-entry",
      title: "Bulbasaur (Simbiosi)",
      content:
        "Il bulbo sulla schiena di Bulbasaur è piantato alla nascita. Cresce in simbiosi con il Pokémon, fornendogli energia attraverso la fotosintesi. Spesso si crogiola al sole nelle radure della foresta.",
    },
  ];

  onScrollTo(targetId: string): void {
    this.scrollToRequested.emit({ id: targetId });
  }
}
