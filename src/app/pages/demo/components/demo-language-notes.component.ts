import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-demo-language-notes",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./demo-language-notes.component.html",
  styles: [
    `
      :host {
        display: block;
      }

      .language-section {
        max-inline-size: 64rem;
        margin-inline: auto;
        margin-block: 2rem;
        padding-block: 2rem;
        padding-inline: 2rem;
        background-color: #ffffff;
        border-radius: 1.5rem;
        box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.05);
        border: 0.0625rem solid #e7e5e4;
      }

      .section-title {
        margin-block-start: 0;
        margin-block-end: 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #292524;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .section-icon {
        color: #047857;
        font-size: 1.75rem;
        inline-size: 1.75rem;
        block-size: 1.75rem;
      }

      .content-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        align-items: stretch;
      }

      @media (min-width: 48rem) {
        .content-wrapper {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .card {
        background-color: #ffffff;
        border-radius: 1rem;
        padding-block: 1.25rem;
        padding-inline: 1.25rem;
        box-shadow: 0 0.25rem 0.875rem rgba(0, 0, 0, 0.06);
        border: 0.0625rem solid #e5e7eb;
        display: flex;
        flex-direction: column;
        min-block-size: 20rem;
      }

      .card-title {
        margin-block-start: 0;
        margin-block-end: 1rem;
        font-size: 1.125rem;
        font-weight: 700;
        color: #1f2937;
        padding-block-end: 0.5rem;
        border-block-end: 0.0625rem solid #f3f4f6;
      }

      .note {
        flex: 1;
        padding-block: 0.5rem;
        padding-inline: 0.5rem;
        min-block-size: 16rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;
        overflow: hidden;
      }

      .note[lang="ja"] {
        writing-mode: vertical-rl;
        font-family: "Noto Serif JP", serif;
        text-orientation: mixed;
        flex-direction: column;
        inline-size: 100%;
        block-size: 100%;
      }

      .note[lang="it"] {
        writing-mode: horizontal-tb;
        font-family: "Plus Jakarta Sans", sans-serif;
        flex-direction: row;
        inline-size: 100%;
        block-size: 100%;
      }

      .note-img {
        object-fit: cover;
        border-radius: 0.5rem;
        border: 0.0625rem solid #e5e7eb;
        flex-shrink: 0;
        box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.05);
        background-color: #f5f5f4;
      }

      .note[lang="it"] .note-img {
        inline-size: clamp(6rem, 28%, 8.5rem);
        block-size: clamp(5rem, 22%, 7.5rem);
        max-inline-size: 35%;
        max-block-size: 8rem;
      }

      .note[lang="ja"] .note-img {
        inline-size: clamp(5rem, 22%, 7.5rem);
        block-size: clamp(6rem, 28%, 8.5rem);
        max-inline-size: 8rem;
        max-block-size: 35%;
      }

      .note-text {
        flex: 1;
        min-inline-size: 0;
        min-block-size: 0;
        margin-block: 0;
        margin-inline: 0;
        font-size: 1.05rem;
        line-height: 1.85;
        color: #292524;
        text-align: start;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoLanguageNotesComponent {
  readonly cards: {
    readonly id: string;
    readonly lang: "ja" | "it";
    readonly title: string;
    readonly imageAlt: string;
    readonly text: string;
  }[] = [
    {
      id: "card-japanese",
      lang: "ja",
      title: "Giapponese",
      imageAlt: "複数のポケモンが描かれた画像",
      text: "「ポケットモンスター」は、たくさんの謎を秘めた不思議な生き物。空に、海に、森に、街に、世界中の至る所でその姿を見ることができる。",
    },
    {
      id: "card-italian",
      lang: "it",
      title: "Traduzione (Italiano)",
      imageAlt: "Immagine contenente diversi pokémon",
      text: "I Pokémon sono creature misteriose con molti segreti. Possono essere visti ovunque nel mondo: nel cielo, nel mare, nelle foreste e nelle città.",
    },
  ];
}
