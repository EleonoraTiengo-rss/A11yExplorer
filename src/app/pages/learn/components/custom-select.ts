import { Component, ChangeDetectionStrategy, signal, computed, ElementRef, HostListener, viewChild, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './custom-select.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectComponent {
  pokes = input.required<{ id: string, name: string, type: string }[]>();
  
  dittoContainer = viewChild<ElementRef>('dittoContainer');

  isDittoOpen = signal(false);
  selectedPokeIdx = signal(0);
  highlightedIdx = signal(0);
  
  selectedPoke = computed(() => this.pokes()[this.selectedPokeIdx()]);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const container = this.dittoContainer()?.nativeElement;
    if (container && !container.contains(event.target)) {
      this.isDittoOpen.set(false);
    }
  }

  toggleDitto() {
    this.isDittoOpen.update(v => !v);
    if (this.isDittoOpen()) {
      this.highlightedIdx.set(this.selectedPokeIdx());
    }
  }

  selectPoke(idx: number) {
    this.selectedPokeIdx.set(idx);
    this.isDittoOpen.set(false);
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.isDittoOpen()) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(event.key)) {
        event.preventDefault();
        this.isDittoOpen.set(true);
        this.highlightedIdx.set(this.selectedPokeIdx());
      }
      return;
    }

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.highlightedIdx.update(i => (i + 1) % this.pokes().length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.highlightedIdx.update(i => (i - 1 + this.pokes().length) % this.pokes().length);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.selectPoke(this.highlightedIdx());
        break;
      case 'Escape':
        event.preventDefault();
        this.isDittoOpen.set(false);
        break;
      case 'Tab':
        this.isDittoOpen.set(false);
        break;
    }
  }
}
