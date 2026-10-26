import {
  Component,
  ChangeDetectionStrategy,
  input,
  output
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: "app-demo-report-form",
  standalone: true,
  imports: [MatIconModule, FormsModule],
  host: { class: "block" },
  templateUrl: "./demo-report-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoReportFormComponent {
  isSubmitted = input.required<boolean>();
  formSubmitted = output<void>();

  onInvalid(event: Event, pokemonName: NgModel): void {
    event.preventDefault();
    pokemonName.control.markAsTouched();
    (event.target as HTMLInputElement).focus();
  }

  onSubmit(event: SubmitEvent, form: HTMLFormElement, pokemonName: NgModel): void {
    event.preventDefault();
    form.reset();
    pokemonName.reset();
    this.formSubmitted.emit();
  }
}
