import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-language-notes',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  template: `
    <section id="language" class="scroll-mt-24 bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
      <h2 class="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <mat-icon class="text-emerald-700">translate</mat-icon> Note di Ricerca (Giappone)
      </h2>
      <div lang="ja" class="p-6 bg-stone-50 rounded-2xl border border-stone-100">
        <p class="text-lg text-stone-800 leading-relaxed italic">
          「ポケットモンスター」は、たくさんの謎を秘めた不思議な生き物。空に、海に、森に、街に、世界中の至る所でその姿を見ることができる。
        </p>
        <p class="text-sm text-stone-500 mt-4">
          (Traduzione: I Pokémon sono creature misteriose con molti segreti. Possono essere visti ovunque nel mondo: nel cielo, nel mare, nelle foreste e nelle città.)
        </p>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoLanguageNotesComponent {}
