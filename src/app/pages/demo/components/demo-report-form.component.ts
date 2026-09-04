import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
} from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-demo-report-form",
  standalone: true,
  imports: [MatIconModule],
  host: { class: "block" },
  templateUrl: "./demo-report-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoReportFormComponent {
  isSubmitted = input.required<boolean>();
  formSubmitted = output<void>();
}
