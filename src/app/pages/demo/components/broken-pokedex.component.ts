import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-pokedex',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './broken-pokedex.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenPokedexComponent {}
