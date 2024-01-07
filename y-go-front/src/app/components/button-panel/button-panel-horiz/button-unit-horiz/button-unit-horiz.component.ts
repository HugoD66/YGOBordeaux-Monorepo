import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: `app-button-unit`,
  templateUrl: `./button-unit-horiz.component.html`,
  styleUrls: [`./button-unit-horiz.component.scss`],
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
})
export class ButtonUnitHorizComponent {
  @Input({ required: true }) public src!: string;

  @Input({ required: true }) public isParentElement!: boolean;

  @Input() public routerLink: string | undefined;
}
