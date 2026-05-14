import { NgTemplateOutlet, Location } from "@angular/common";
import {
  Component,
  ChangeDetectionStrategy,
  output,
  signal,
  viewChild,
  effect,
  ElementRef,
  OnInit,
  inject,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";

const QUERY_PARAM = "accessible";

@Component({
  selector: "app-demo-header",
  standalone: true,
  imports: [MatIconModule, NgTemplateOutlet],
  templateUrl: "./demo-header.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoHeaderComponent implements OnInit {
  accessibilityToggled = output<boolean>();
  isAccessible = signal(true);
  isDirty = signal(false);
  switchButton = viewChild<ElementRef<HTMLButtonElement>>("switchButton");

  private route = inject(ActivatedRoute);
  private location = inject(Location);

  constructor() {
    effect(() => {
      this.isAccessible();
      if (this.isDirty()) {
        this.switchButton()?.nativeElement?.focus();
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const accessibilityParam = params.get(QUERY_PARAM);
      const parsed = this.parseAccessibilityQueryParam(accessibilityParam);

      if (parsed !== null) {
        this.isAccessible.set(parsed);
        this.accessibilityToggled.emit(parsed);
      }
    });
  }

  onChangeSwitch(): void {
    this.isDirty.set(true);
    this.isAccessible.update((v) => !v);
    this.accessibilityToggled.emit(this.isAccessible());

    const [path, query] = this.location.path().split("?");
    const params = new URLSearchParams(query || "");
    params.set(QUERY_PARAM, String(this.isAccessible()));

    this.location.replaceState(path, params.toString());
  }

  private parseAccessibilityQueryParam(value: string | null): boolean | null {
    if (value === null) {
      return null;
    }

    const normalized = value.trim().toLowerCase();

    if (normalized === "true") {
      return true;
    } else if (normalized === "false") {
      return false;
    }

    return null;
  }
}
