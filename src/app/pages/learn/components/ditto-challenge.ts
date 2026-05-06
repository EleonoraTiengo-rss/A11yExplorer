import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NativeSelectComponent } from './native-select';
import { CustomSelectComponent } from './custom-select';

@Component({
  selector: 'app-ditto-challenge',
  standalone: true,
  imports: [MatIconModule, NativeSelectComponent, CustomSelectComponent],
  templateUrl: './ditto-challenge.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DittoChallengeComponent {
  pokes = [
    { id: 'pika', name: 'Pikachu', type: 'Electro' },
    { id: 'bulba', name: 'Bulbasaur', type: 'Erba' },
    { id: 'char', name: 'Charmander', type: 'Fuoco' },
    { id: 'squi', name: 'Squirtle', type: 'Acqua' }
  ];

  showSolutions = signal(false);

  toggleSolutions() {
    this.showSolutions.update(v => !v);
  }
}
