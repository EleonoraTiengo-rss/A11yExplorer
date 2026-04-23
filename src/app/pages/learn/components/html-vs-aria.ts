import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-html-vs-aria',
  standalone: true,
  template: `
    <section class="mb-16">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-lg font-mono">3</div>
        <h3 class="text-3xl font-bold text-slate-900 tracking-tight">L'Evoluzione Semantica: HTML vs ARIA 🧬</h3>
      </div>
      
      <p class="text-lg text-slate-600 mb-8 leading-relaxed">
        Proprio come un Pokémon si evolve per diventare più forte, l'HTML si è evoluto introducendo tag semantici che rendono superflui molti ruoli ARIA. La prima regola di ARIA è: <strong>se esiste un tag HTML nativo, usalo!</strong> Ecco un "Pokédex" delle equivalenze:
      </p>

      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="grid grid-cols-2 bg-slate-50 border-b border-slate-200 p-4 font-bold text-slate-700">
          <div>Elemento HTML Nativo</div>
          <div>Ruolo ARIA Equivalente</div>
        </div>
        <div class="divide-y divide-slate-100">
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;main&gt;</div>
            <div class="font-mono text-slate-600">role="main"</div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;nav&gt;</div>
            <div class="font-mono text-slate-600">role="navigation"</div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;header&gt;</div>
            <div class="font-mono text-slate-600">role="banner"</div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;footer&gt;</div>
            <div class="font-mono text-slate-600">role="contentinfo"</div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;aside&gt;</div>
            <div class="font-mono text-slate-600">role="complementary"</div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;section&gt;</div>
            <div class="font-mono text-slate-600">role="region" <span class="text-xs text-slate-400 ml-1">(se ha un nome accessibile)</span></div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;article&gt;</div>
            <div class="font-mono text-slate-600">role="article"</div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;form&gt;</div>
            <div class="font-mono text-slate-600">role="form"</div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;button&gt;</div>
            <div class="font-mono text-slate-600">role="button"</div>
          </div>
          <div class="grid grid-cols-2 p-4 items-center hover:bg-slate-50 transition-colors">
            <div class="font-mono text-pink-600 font-semibold">&lt;a href="..."&gt;</div>
            <div class="font-mono text-slate-600">role="link"</div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlVsAriaComponent {}
