import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-broken-hero-button",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./broken-hero-button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrokenHeroButtonComponent {
  count = signal(0);
  message = signal("");

  throwBall(): void {
    this.count.update((n) => n + 1);
    this.message.set(`Poké Ball lanciata! Totale: ${this.count()}`);
  }

  flee(event: Event): void {
    event.preventDefault();
    this.count.set(0);
    this.message.set(
      "Il Pokémon selvatico è fuggito! Spazio ha fatto un'azione diversa da Invio e Click: con uno screen reader acceso non lo vedresti mai.",
    );
  }
}
