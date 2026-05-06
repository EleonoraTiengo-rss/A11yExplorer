import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-pokedex',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  template: `
    <section class="space-y-6">
      <div class="text-2xl font-bold text-stone-800 mb-6">Dati Pokédex</div>
      
      <div id="caterpie-entry" class="scroll-mt-24 flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
        <div class="w-48 h-48 bg-stone-50 rounded-2xl border border-stone-100 flex items-center justify-center p-4 shrink-0">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png" 
               alt="immagine10.png" 
               class="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform"
               referrerpolicy="no-referrer">
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <div class="text-2xl font-bold text-emerald-800">Caterpie</div>
            <span class="text-stone-400 font-mono font-bold">#0010</span>
          </div>
          <div class="text-stone-600 leading-relaxed mb-4">
            Per proteggersi rilascia un puzzo terribile dalle antenne con cui respinge i nemici. I suoi piedini a ventosa gli permettono di arrampicarsi ovunque.
          </div>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-lime-100 text-lime-800 text-sm font-bold rounded-full border border-lime-200">Coleottero</span>
          </div>
        </div>
      </div>

      <div id="weedle-entry" class="scroll-mt-24 flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
        <div class="w-48 h-48 bg-stone-50 rounded-2xl border border-stone-100 flex items-center justify-center p-4 shrink-0">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png" 
               alt="" 
               class="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform"
               referrerpolicy="no-referrer">
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <div class="text-2xl font-bold text-amber-800">Weedle</div>
            <span class="text-stone-400 font-mono font-bold">#0013</span>
          </div>
          <div class="text-stone-600 leading-relaxed mb-4">
            Spesso si nasconde nell'erba alta o sotto le foglie. Ha un pungiglione velenoso sulla testa lungo circa 5 centimetri.
          </div>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-lime-100 text-lime-800 text-sm font-bold rounded-full border border-lime-200">Coleottero</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-bold rounded-full border border-purple-200">Veleno</span>
          </div>
        </div>
      </div>

      <div id="bulbasaur-entry" class="scroll-mt-24 flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
        <div class="w-48 h-48 bg-stone-50 rounded-2xl border border-stone-100 flex items-center justify-center p-4 shrink-0">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" 
               alt="immagine1.png" 
               class="w-full h-full object-contain drop-shadow-lg hover:scale-110 transition-transform"
               referrerpolicy="no-referrer">
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <div class="text-2xl font-bold text-emerald-800">Bulbasaur</div>
            <span class="text-stone-400 font-mono font-bold">#0001</span>
          </div>
          <div class="text-stone-600 leading-relaxed mb-4">
            Per qualche tempo dopo la nascita, cresce assorbendo nutrimento dal seme piantato sul suo dorso.
          </div>
          <div class="flex gap-2">
            <span class="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-bold rounded-full border border-emerald-200">Erba</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-bold rounded-full border border-purple-200">Veleno</span>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenPokedexComponent {}
