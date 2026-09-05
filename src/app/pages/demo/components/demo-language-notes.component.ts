import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-demo-language-notes",
  standalone: true,
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
        margin-block: 0.5rem;
        padding-block: 0.5rem;
        padding-inline: 0.5rem;
        background-color: var(--app-surface, #ffffff);
        border-radius: 0;
        box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.05);
        border: 0.0625rem solid var(--app-border, #e7e5e4);
      }

      .section-title {
        margin-block-start: 0;
        margin-block-end: 0.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--app-text-primary, #292524);
      }

      .content-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 0.5rem;
        align-items: stretch;
      }

      .card {
        background-color: var(--app-surface, #ffffff);
        color: var(--app-text-primary, #1f2937);
        border-radius: 0;
        padding-block: 0.5rem;
        padding-inline: 0.5rem;
        box-shadow: 0 0.25rem 0.875rem rgba(0, 0, 0, 0.06);
        border: 0.0625rem solid var(--app-border, #e5e7eb);
        display: flex;
        flex-direction: column;
        min-block-size: auto;
      }

      .card-title {
        margin-block-start: 0;
        margin-block-end: 0.5rem;
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--app-text-primary, #1f2937);
        padding-block-end: 0.5rem;
        border-block-end: 0.0625rem solid var(--app-border, #f3f4f6);
      }

      .note {
        flex: 1;
        padding-block: 0.5rem;
        padding-inline: 0.5rem;
        min-block-size: 16rem;
        display: flex;
        align-items: stretch;
        gap: 0.5rem;
        overflow: visible;
      }

      .note[lang="it"] {
        writing-mode: horizontal-tb;
        font-family: "Plus Jakarta Sans", sans-serif;
        flex-direction: column;
        inline-size: 100%;
        block-size: auto;
      }

      .note[lang="ja"] {
        writing-mode: horizontal-tb;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        inline-size: 100%;
        block-size: auto;
      }

      .note-img {
        object-fit: cover;
        border-radius: 0.5rem;
        border: 0.0625rem solid var(--app-border, #e5e7eb);
        flex-shrink: 0;
        box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.05);
        background-color: var(--app-surface-subtle, #f5f5f4);
      }

      .note[lang="it"] .note-img {
        inline-size: 100%;
        max-inline-size: 100%;
        block-size: auto;
        max-block-size: 9rem;
        aspect-ratio: 16 / 9;
        align-self: center;
      }

      .note[lang="ja"] .note-img {
        inline-size: 100%;
        max-inline-size: 100%;
        block-size: auto;
        max-block-size: 9rem;
        aspect-ratio: 16 / 9;
        align-self: center;
      }

      .note-text {
        flex: 1;
        min-inline-size: 0;
        min-block-size: 0;
        margin-block: 0;
        margin-inline: 0;
        font-size: 1.05rem;
        line-height: 1.85;
        color: var(--app-text-primary, #292524);
        text-align: start;
      }

      .note[lang="ja"] .note-text {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        font-family: "Noto Serif JP", "Yu Mincho", "Hiragino Mincho ProN", serif;
        font-size: 1.05rem;
        line-height: 1.85;
        letter-spacing: 0.03em;
        display: block;
        visibility: visible;
        opacity: 1;
        flex: none;
        inline-size: 13.5rem;
        height: 13.5rem;
        min-inline-size: 11rem;
        min-height: 11rem;
        block-size: 100%;
        width: 100%;
        max-block-size: 100%;
        max-width: 100%;
        margin-block: 0;
        margin-inline: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      @media (min-width: 48rem) {
        .language-section {
          border-radius: 1.5rem;
          margin-block: 2rem;
          padding-block: 2rem;
          padding-inline: 2rem;
        }

        .section-title {
          margin-block-end: 1.5rem;
        }

        .content-wrapper {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .card {
          border-radius: 1rem;
          padding-block: 1.25rem;
          padding-inline: 1.25rem;
          min-block-size: 20rem;
        }

        .card-title {
          margin-block-end: 1rem;
        }

        .note {
          min-block-size: 16rem;
          gap: 1.25rem;
          overflow: visible;
        }

        .note[lang="it"] {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          block-size: 100%;
        }

        .note[lang="it"] .note-img {
          inline-size: clamp(6rem, 28%, 8.5rem);
          block-size: clamp(5rem, 22%, 7.5rem);
          max-inline-size: 35%;
          max-block-size: 8rem;
        }

        .note[lang="ja"] {
          writing-mode: vertical-rl;
          font-family: "Noto Serif JP", serif;
          text-orientation: mixed;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          inline-size: 100%;
          block-size: 100%;
        }

        .note[lang="ja"] .note-text {
          writing-mode: inherit;
          inline-size: auto;
          height: auto;
          block-size: auto;
          width: auto;
          max-inline-size: none;
          max-block-size: none;
          min-inline-size: 0;
          min-height: 0;
          flex: 1 1 auto;
          overflow: visible;
          align-self: stretch;
          margin-block: 0;
          margin-inline: 0;
        }

        .note[lang="ja"] .note-img {
          inline-size: clamp(5rem, 22%, 7.5rem);
          block-size: clamp(6rem, 28%, 8.5rem);
          max-inline-size: 8rem;
          max-block-size: 35%;
          align-self: center;
          flex-shrink: 0;
        }
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
