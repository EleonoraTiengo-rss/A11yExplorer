import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-wcag-principles',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="mb-16">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-lg font-mono">2</div>
        <h3 class="text-3xl font-bold text-slate-900 tracking-tight">I quattro principi fondamentali (P.O.U.R.) 📖</h3>
      </div>

      <div class="space-y-6">
        <!-- Perceivable -->
        <div class="bg-white p-6 rounded-2xl border-l-4 border-l-emerald-500 shadow-sm relative overflow-hidden">
          <h4 class="text-xl font-bold text-slate-900 mb-2 relative z-10">Percepibile 👀 <span class="text-slate-400 font-normal text-lg">(Perceivable)</span></h4>
          <p class="text-slate-600 mb-4 relative z-10">Le informazioni devono essere percepibili dagli utenti.</p>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 relative z-10">
            <strong class="text-sm text-slate-500 uppercase tracking-wider block mb-2">Esempi pratici:</strong>
            <ul class="space-y-1 text-slate-700">
              <li>• Immagini con attributo <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm text-pink-600 font-mono">alt</code></li>
              <li>• Contrasto cromatico adeguato tra testo e sfondo</li>
            </ul>
          </div>
        </div>

        <!-- Operable -->
        <div class="bg-white p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-sm relative overflow-hidden">
          <h4 class="text-xl font-bold text-slate-900 mb-2 relative z-10">Utilizzabile 🎮 <span class="text-slate-400 font-normal text-lg">(Operable)</span></h4>
          <p class="text-slate-600 mb-4 relative z-10">L'interfaccia deve poter essere utilizzata anche senza mouse.</p>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 relative z-10">
            <strong class="text-sm text-slate-500 uppercase tracking-wider block mb-2">Esempi pratici:</strong>
            <ul class="space-y-1 text-slate-700">
              <li>• Navigazione completa tramite tastiera</li>
              <li>• Utilizzo del tasto <kbd class="bg-slate-200 px-2 py-0.5 rounded text-sm font-mono border-b-2 border-slate-300">Tab</kbd> per spostarsi tra gli elementi</li>
            </ul>
          </div>
        </div>

        <!-- Understandable -->
        <div class="bg-white p-6 rounded-2xl border-l-4 border-l-amber-500 shadow-sm relative overflow-hidden">
          <h4 class="text-xl font-bold text-slate-900 mb-2 relative z-10">Comprensibile 🧠 <span class="text-slate-400 font-normal text-lg">(Understandable)</span></h4>
          <p class="text-slate-600 mb-4 relative z-10">Contenuti e interfaccia devono essere chiari e prevedibili.</p>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 relative z-10">
            <strong class="text-sm text-slate-500 uppercase tracking-wider block mb-2">Esempi pratici:</strong>
            <ul class="space-y-1 text-slate-700">
              <li>• Uso corretto dell'attributo <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm text-pink-600 font-mono">lang</code></li>
              <li>• Comportamento coerente della navigazione</li>
              <li>• Messaggi di errore chiari nei form</li>
            </ul>
          </div>
        </div>

        <!-- Robust -->
        <div class="bg-white p-6 rounded-2xl border-l-4 border-l-purple-500 shadow-sm relative overflow-hidden">
          <h4 class="text-xl font-bold text-slate-900 mb-2 relative z-10">Robusto 🛡️ <span class="text-slate-400 font-normal text-lg">(Robust)</span></h4>
          <p class="text-slate-600 mb-4 relative z-10">Il codice deve funzionare correttamente con tecnologie assistive.</p>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 relative z-10">
            <strong class="text-sm text-slate-500 uppercase tracking-wider block mb-2">Esempi pratici:</strong>
            <ul class="space-y-1 text-slate-700">
              <li>• Uso corretto dell'HTML semantico</li>
              <li>• Utilizzo degli attributi <code class="bg-slate-200 px-1.5 py-0.5 rounded text-sm text-pink-600 font-mono">aria-*</code> quando necessario</li>
            </ul>
          </div>
        </div>

        <!-- Approfondimento: Accessibilità Universale -->
        <div class="bg-indigo-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden mt-8">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div class="relative z-10">
            <h4 class="text-2xl font-bold mb-4 flex items-center gap-3">
              <mat-icon class="text-indigo-400">public</mat-icon>
              Accessibilità Universale: Un ponte tra culture e conoscenze
            </h4>
            <p class="text-indigo-100 text-lg mb-8 leading-relaxed max-w-4xl">
              L'accessibilità viene spesso ridotta a una serie di accorgimenti per disabilità permanenti. Tuttavia, una vera inclusione considera anche il <strong>linguaggio</strong>, la <strong>cultura</strong> e il <strong>livello di istruzione</strong> degli utenti.
            </p>

            <div class="grid lg:grid-cols-3 gap-6 text-slate-100">
              <!-- Linguaggio e Conformità -->
              <div class="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col">
                <div class="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <mat-icon class="text-white">translate</mat-icon>
                </div>
                <h5 class="font-bold text-lg mb-2">Linguaggio e Conformità</h5>
                <p class="text-indigo-100/90 text-sm leading-relaxed mb-4 flex-grow">
                  Secondo la <strong>Conformance (Statement 5.5)</strong> delle WCAG, la conformità deve essere garantita per <em>ogni lingua supportata</em>. Le traduzioni devono essere adattate localmente: una traduzione letterale può rendere il sito inaccessibile a chi parla quella lingua.
                </p>
                <div class="text-[10px] bg-indigo-950/50 p-3 rounded-lg border border-indigo-400/20 font-mono italic">
                  Esempio Localizzazione:<br>"Piece of cake" -> "Facile come bere un bicchier d'acqua"
                </div>
              </div>

              <!-- Livello di Istruzione -->
              <div class="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col">
                <div class="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <mat-icon class="text-white">school</mat-icon>
                </div>
                <h5 class="font-bold text-lg mb-2">Livello di Istruzione</h5>
                <p class="text-indigo-100/90 text-sm leading-relaxed mb-4 flex-grow">
                  Il <strong>Principio 3 (Understandable)</strong> impone che i testi siano chiari anche per chi ha un livello di istruzione basso o difficoltà cognitive. Ad esempio, il <strong>prezzo finale</strong> deve essere esplicito: l'utente non deve fare calcoli complessi o leggere note minuscole per capire quanto pagherà.
                </p>
                <div class="flex items-center gap-2 text-xs text-indigo-200 bg-indigo-950/50 p-2 rounded-lg border border-indigo-400/20">
                  <mat-icon class="text-emerald-400 text-sm">payments</mat-icon>
                  <span>Trasparenza: Prezzo € 10 (IVA e tasse incluse)</span>
                </div>
              </div>

              <!-- Errori Culturali -->
              <div class="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col">
                <div class="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <mat-icon class="text-white">auto_awesome</mat-icon>
                </div>
                <h5 class="font-bold text-lg mb-2">Errori Culturali</h5>
                <p class="text-indigo-100/90 text-sm leading-relaxed mb-4 flex-grow">
                  I colori e i simboli non sono universali. Per prevenire errori critici dovuti a interpretazioni culturali diverse, è obbligatorio fornire <strong>legende esplicite</strong> o spiegazioni testuali che non si affidino esclusivamente alla percezione visiva o simbolica del colore.
                </p>
                <div class="flex flex-col gap-1 text-[10px] bg-indigo-950/50 p-2 rounded-lg border border-indigo-400/20">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <span class="text-indigo-200">Rosso in Cina: Fortuna (non sempre pericolo!)</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <mat-icon class="text-indigo-200 text-[12px]">info</mat-icon>
                    <span class="italic">Sempre aggiungere etichette testuali.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WcagPrinciplesComponent {}
