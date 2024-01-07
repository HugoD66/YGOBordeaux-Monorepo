import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: `app-button-unit-ver`,
  templateUrl: `./button-unit-ver.component.html`,
  styleUrls: [`./button-unit-ver.component.scss`],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
})
export class ButtonUnitVerComponent {
  @Input({ required: true }) public src!: string;

  @Input({ required: true }) public isParentElement!: boolean;

  @Input({ required: true }) public routerLink: string | undefined;
}
