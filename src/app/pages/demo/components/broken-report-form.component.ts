import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-broken-report-form',
  standalone: true,
  imports: [MatIconModule],
  host: { class: 'block' },
  templateUrl: './broken-report-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokenReportFormComponent {
  isSubmitted = input.required<boolean>();
  isUrgent = input.required<boolean>();
  formSubmitted = output<void>();
  urgentToggled = output<void>();
}
