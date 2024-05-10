import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ButtonUnitHorizComponent } from './button-unit-horiz/button-unit-horiz.component';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: `app-button-panel-horiz`,
  templateUrl: `./button-panel-horiz.component.html`,
  styleUrls: [`./button-panel-horiz.component.scss`],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ButtonUnitHorizComponent,
    NgClass,
    RouterLink,
  ],
})
export class ButtonPanelHorizComponent {
  showFiller: boolean = false;
  isUserAuthenticated: boolean = false;
  result: UserModel | undefined;
  routerLinkProfile: string = ``;
  public getMe: WritableSignal<UserModel | null> = signal(null);

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  async fetchUserAndNavigate() {
    const isLogged = this.userService.isLoggedIn();
    const token = localStorage.getItem(`access_token`);
    if (!isLogged || !token) {
      this.router.navigate([`/login`]);
    }
    const data = await this.userService.getMe(token!).toPromise();
    this.result = data;
    if (this.result?.id) {
      this.isUserAuthenticated = true;
      this.routerLinkProfile = `users/detail/${this.result?.id}`;
      this.router.navigate([this.routerLinkProfile]);
    } else {
      this.router.navigate([`/login`]);
    }
  }

  arrowLeftPicture: string = `./assets/icons/menu.png`;
  userPicture: string = `./assets/icons/user-withoutB.png`;
  winePicture: string = `./assets/icons/drinkWine-withoutB.png`;
  contactPicture: string = `./assets/icons/contact-withoutB.png`;

  routerLinkBars: string = `/bars`;
  routerLinkUsers: string = `/users`;
  routerLinkLogin: string = `/login`;

  isDrawerOpen: boolean = false;
}
