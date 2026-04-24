import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-documentation-links',
  templateUrl: './documentation-links.html',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentationLinksComponent {}
