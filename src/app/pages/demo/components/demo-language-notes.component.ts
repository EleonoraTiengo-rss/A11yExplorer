import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-demo-language-notes",
  standalone: true,
  host: { class: "block" },
  templateUrl: "./demo-language-notes.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoLanguageNotesComponent {
  readonly cards: {
    readonly id: string;
    readonly lang: "ja" | "it";
    readonly title: string;
    readonly imageAlt: string;
    readonly text: string;
    readonly isRightToLeft?: boolean;
  }[] = [
    {
      id: "card-japanese",
      lang: "ja",
      title: "Giapponese",
      imageAlt: "ポケモンカードの上のモンスターボール",
      text: "「ポケットモンスター」は、たくさんの謎を秘めた不思議な生き物。空に、海に、森に、街に、世界中の至る所でその姿を見ることができる。",
      isRightToLeft: true,
    },
    {
      id: "card-italian",
      lang: "it",
      title: "Traduzione (Italiano)",
      imageAlt: "Una Poké Ball sopra delle carte Pokémon",
      text: "I Pokémon sono creature misteriose che celano molti segreti. Nel cielo, nel mare, nelle foreste e nelle città: si possono incontrare in ogni angolo del mondo.",
    },
  ];
}
