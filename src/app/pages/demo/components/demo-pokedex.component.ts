import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-demo-pokedex',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './demo-pokedex.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPokedexComponent {}
