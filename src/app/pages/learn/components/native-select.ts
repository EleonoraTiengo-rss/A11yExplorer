import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-native-select',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './native-select.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NativeSelectComponent {
  pokes = input.required<{ id: string, name: string, type: string }[]>();
}
