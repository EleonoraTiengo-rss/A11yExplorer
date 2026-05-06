import { Component, ChangeDetectionStrategy, output } from '@angular/core';

@Component({
  selector: 'app-demo-terminal',
  standalone: true,
  host: { class: 'block' },
  template: `
    <section id="terminal" class="scroll-mt-24 bg-emerald-900 p-8 rounded-3xl shadow-sm border border-emerald-800 text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      <h2 class="text-2xl font-bold text-amber-300 mb-4 relative z-10">Terminale di Ricerca</h2>
      <p class="mb-6 text-emerald-100 relative z-10 max-w-lg mx-auto">Simula la fine della sessione di ricerca nel terminale dell'Atlante. Un avviso chiederà di confermare la presenza.</p>
      
      <button (click)="popupOpened.emit()" class="relative z-10 px-8 py-3 bg-amber-500 text-stone-900 rounded-xl font-bold cursor-pointer hover:bg-amber-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/50 shadow-lg transition-all">
        Simula Fine Sessione
      </button>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTerminalComponent {
  popupOpened = output<void>();
}
