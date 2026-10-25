import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

interface AccessibilityTool {
  name: string;
  icon: string;
  description: string;
  /** Icona evidenziata (indigo) per lo strumento consigliato */
  highlighted?: boolean;
  /** Link allo strumento (se presente viene mostrata l'icona di link esterno) */
  url?: string;
  /** Avviso aggiuntivo mostrato sotto la descrizione */
  note?: string;
}

@Component({
  selector: "app-accessibility-tools",
  standalone: true,
  imports: [MatIconModule],
  templateUrl: "./accessibility-tools.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessibilityToolsComponent {
  readonly browserExtensions: AccessibilityTool[] = [
    {
      name: "h①②③ – Accessibility HTML5 Outliner",
      icon: "format_list_numbered",
      url: "https://hinderlingvolkart.github.io/h123/#1",
      description: "Permette di vedere immediatamente la struttura gerarchica degli headings (H1-H6) della pagina.",
    },
    {
      name: "taba11y - tab order accessibility tool",
      icon: "keyboard_tab",
      url: "https://chromewebstore.google.com/detail/taba11y-tab-order-accessi/aocppmckdocdjkphmofnklcjhdidgmga",
      description: "Disegna visivamente il percorso che il focus della tastiera compie saltando da un elemento all'altro.",
    },
    {
      name: "Colour Contrast Checker",
      icon: "contrast",
      url: "https://chromewebstore.google.com/detail/colour-contrast-checker/nmmjeclfkgjdomacpcflgdkgpphpmnfe",
      description: "Verifica rapida della conformità del rapporto di contrasto tra testo e sfondo secondo le WCAG.",
    },
    {
      name: "Focus indicator",
      icon: "visibility",
      url: "https://chromewebstore.google.com/detail/focus-indicator/ieandfkgbncmapkpgchnffbodegkemea",
      description: "Aiuta a localizzare visivamente dove si trova il focus sulla pagina durante la navigazione da tastiera.",
    },
    {
      name: "WAVE Evaluation Tool",
      icon: "fact_check",
      url: "https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh",
      description: "Analizza la pagina e mostra direttamente sopra i contenuti icone che segnalano errori, avvisi e struttura (landmark, heading, testi alternativi).",
    },
    {
      name: "axe DevTools - Web Accessibility Testing",
      icon: "build",
      url: "https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd",
      description: "Lo standard dei test automatici. Scova errori nel codice durante lo sviluppo con spiegazioni dettagliate.",
    },
  ];

  readonly emulators: AccessibilityTool[] = [
    {
      name: "Web Disability Simulator",
      icon: "masks",
      url: "https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla",
      description: "Simula diverse disabilità (visive, motorie) per capire come l'interfaccia reagisce.",    },
    {
      name: "DevTools - Rendering emulation",
      icon: "tune",
      url: "https://developer.chrome.com/docs/devtools/rendering",
      description: "Il pannello Rendering dei Chrome DevTools permette di emulare forced-colors, prefers-color-scheme, Emulate OS text scale ed Emulate vision deficiencies, per verificare come la pagina reagisce alle impostazioni e alle esigenze visive dell'utente.",
      note: "Alcune di queste funzionalità sono sperimentali: potrebbero non essere disponibili in tutte le versioni di Chrome o comportarsi diversamente dal rendering reale.",
    },
  ];

  readonly screenReaders: AccessibilityTool[] = [
    {
      name: "NVDA (NonVisual Desktop Access)",
      icon: "star",
      highlighted: true,
      description: "Il più consigliato per i test su Windows: gratuito, open-source e completo. Vedi approfondimento sotto.",
    },
    {
      name: "JAWS",
      icon: "laptop",
      description: "Lo standard professionale nel mondo Windows (a pagamento).",
    },
    {
      name: "VoiceOver",
      icon: "apple",
      description: "Integrato nativamente in tutti i dispositivi Apple (macOS, iOS).",
    },
    {
      name: "TalkBack",
      icon: "android",
      description: "Lo screen reader predefinito per il sistema Android.",
    },
  ];
}
