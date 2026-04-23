import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wcag-levels',
  standalone: true,
  template: `
    <section class="mb-16">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-lg font-mono">6</div>
        <h3 class="text-3xl font-bold text-slate-900 tracking-tight">Livelli di conformità WCAG 🏅</h3>
      </div>

      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex-1 bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
          <div class="text-3xl font-black text-slate-300 mb-2">A</div>
          <h4 class="font-bold text-slate-900 mb-2">Livello A</h4>
          <p class="text-sm text-slate-600">Il livello minimo indispensabile per l'accessibilità.</p>
        </div>
        <div class="flex-1 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center shadow-md transform md:-translate-y-2">
          <div class="text-3xl font-black text-red-500 mb-2">AA</div>
          <h4 class="font-bold text-white mb-2">Livello AA</h4>
          <p class="text-sm text-slate-300">Lo standard più diffuso e spesso richiesto dalla legge.</p>
        </div>
        <div class="flex-1 bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
          <div class="text-3xl font-black text-emerald-300 mb-2">AAA</div>
          <h4 class="font-bold text-slate-900 mb-2">Livello AAA</h4>
          <p class="text-sm text-slate-600">Il livello massimo e più rigoroso di accessibilità.</p>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WcagLevelsComponent {}
