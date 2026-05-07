import { Component, ChangeDetectionStrategy, signal, HostBinding } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  selectedPage = signal('learn');
  @HostBinding('attr.aria-hidden')
  get ariaHidden(): boolean {
    return this.selectedPage() === 'learn';
  }
}
