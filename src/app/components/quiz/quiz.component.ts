import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface Question {
  text: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
}

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './quiz.component.html'
})
export class QuizComponent {
  questions: Question[] = [
    {
      text: "Qual è lo scopo dell'attributo alt nelle immagini?",
      options: [
        { id: 'A', text: 'Migliorare il SEO', isCorrect: false },
        { id: 'B', text: "Descrivere l'immagine per chi non può vederla", isCorrect: true },
        { id: 'C', text: 'Ridurre il peso delle immagini', isCorrect: false }
      ],
      explanation: "L'attributo alt (testo alternativo) fornisce una descrizione testuale dell'immagine. È essenziale per gli utenti che utilizzano screen reader o che hanno disabilitato il caricamento delle immagini."
    },
    {
      text: "Quale di questi è un problema di accessibilità comune?",
      options: [
        { id: 'A', text: 'Contrasto basso tra testo e sfondo', isCorrect: true },
        { id: 'B', text: 'Uso di HTML semantico', isCorrect: false },
        { id: 'C', text: 'Navigazione da tastiera', isCorrect: false }
      ],
      explanation: "Il basso contrasto rende difficile o impossibile leggere il testo per persone con disabilità visive o in condizioni di forte luce ambientale. L'HTML semantico e la navigazione da tastiera sono invece ottime pratiche!"
    },
    {
      text: "Cosa significa il principio “Percepibile” (Perceivable)?",
      options: [
        { id: 'A', text: 'Il sito deve essere veloce', isCorrect: false },
        { id: 'B', text: 'Le informazioni devono poter essere percepite dagli utenti', isCorrect: true },
        { id: 'C', text: 'Il sito deve essere bello esteticamente', isCorrect: false }
      ],
      explanation: "Percepibile significa che le informazioni e i componenti dell'interfaccia utente devono essere presentati in modo che gli utenti possano percepirli con i loro sensi (es. vista, udito, tatto tramite braille)."
    },
    {
      text: "Quale pattern WAI-ARIA richiede tipicamente l'uso combinato degli attributi aria-expanded, role=\"combobox\" e aria-haspopup?",
      options: [
        { id: 'A', text: 'Menu a discesa (Dropdown Menu)', isCorrect: false },
        { id: 'B', text: 'Combobox (Input con autocompletamento)', isCorrect: true },
        { id: 'C', text: 'Finestra Modale (Dialog)', isCorrect: false }
      ],
      explanation: "Il pattern Combobox è composto da un input di testo (role=\"combobox\") che controlla un popup (aria-haspopup) come una listbox. L'attributo aria-expanded indica se il popup è attualmente visibile."
    },
    {
      text: "Se stai implementando un pattern 'Tabs', quale attributo devi usare sul pannello dei contenuti (tabpanel) per collegarlo al suo tab di riferimento?",
      options: [
        { id: 'A', text: 'aria-controls', isCorrect: false },
        { id: 'B', text: 'aria-labelledby', isCorrect: true },
        { id: 'C', text: 'aria-describedby', isCorrect: false }
      ],
      explanation: "Nel pattern Tabs, il 'tabpanel' deve avere un attributo aria-labelledby che punta all'ID del 'tab' associato, in modo che lo screen reader possa annunciare correttamente il nome del pannello."
    },
    {
      text: "Qual è il modo corretto per nascondere un'icona puramente decorativa agli screen reader, mantenendola visibile a schermo?",
      options: [
        { id: 'A', text: 'aria-hidden="true"', isCorrect: true },
        { id: 'B', text: 'role="presentation"', isCorrect: false },
        { id: 'C', text: 'display: none', isCorrect: false }
      ],
      explanation: "L'attributo aria-hidden=\"true\" rimuove l'elemento dall'albero di accessibilità (Accessibility Tree), rendendolo invisibile agli screen reader ma lasciandolo visibile a schermo. display: none lo nasconderebbe anche visivamente!"
    }
  ];

  currentQuestionIndex = signal(0);
  selectedOption = signal<{ id: string; text: string; isCorrect: boolean } | null>(null);
  score = signal(0);
  isFinished = signal(false);

  currentQuestion = computed(() => this.questions[this.currentQuestionIndex()]);
  isAnswered = computed(() => this.selectedOption() !== null);
  isCorrect = computed(() => this.selectedOption()?.isCorrect ?? false);

  selectOption(option: { id: string; text: string; isCorrect: boolean }) {
    if (this.isAnswered()) return;
    this.selectedOption.set(option);
    if (option.isCorrect) {
      this.score.update(s => s + 1);
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex() < this.questions.length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
      this.selectedOption.set(null);
    } else {
      this.isFinished.set(true);
    }
  }

  resetQuiz() {
    this.currentQuestionIndex.set(0);
    this.selectedOption.set(null);
    this.score.set(0);
    this.isFinished.set(false);
  }
}
