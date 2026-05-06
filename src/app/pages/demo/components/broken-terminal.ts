import { Component, ChangeDetectionStrategy, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-terminal',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  template: `
    <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
    <section class="bg-stone-900 p-6 rounded-3xl border border-stone-800 shadow-xl relative overflow-hidden group">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent)] pointer-events-none"></div>
      <div class="flex items-center gap-4 relative z-10">
        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
          <mat-icon class="text-emerald-400">terminal</mat-icon>
        </div>
        <div class="flex-1">
          <div class="text-emerald-50 font-mono text-sm mb-1 uppercase tracking-wider opacity-50">Sistema di Sicurezza</div>
          <div class="text-emerald-400 font-mono font-bold">Accesso al Settore Ristretto</div>
        </div>
        <div (click)="popupOpened.emit()" class="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg font-mono text-sm border border-emerald-500/30 cursor-pointer outline-none transition-all">
          LOG_IN
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenTerminalComponent {
  popupOpened = output<void>();
}
