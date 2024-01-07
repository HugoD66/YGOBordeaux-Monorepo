import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonUnitHorizComponent } from '../button-panel-horiz/button-unit-horiz/button-unit-horiz.component';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: `app-button-panel-ver`,
  templateUrl: `./button-panel-ver.component.html`,
  styleUrls: [`./button-panel-ver.component.scss`],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ButtonUnitHorizComponent,
    NgClass,
    RouterLink,
  ],
  standalone: true,
})
export class ButtonPanelVerComponent {
  showFiller: boolean = false;

  arrowLeftPicture: string = `./assets/icons/arrowLeft-withoutB.png`;

  userPicture: string = `./assets/icons/user-withoutB.png`;

  winePicture: string = `./assets/icons/drinkWine-withoutB.png`;

  contactPicture: string = `./assets/icons/contact-withoutB.png`;

  routerLinkLogin: string = `/login`;
  routerLinkBars: string = `/bars`;

  isDrawerOpen: boolean = false;

  toogleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
