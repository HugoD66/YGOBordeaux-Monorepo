import {Component, OnInit} from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatIconModule } from "@angular/material/icon"
import { NgClass } from "@angular/common"
import {Router, RouterLink} from "@angular/router"
import { ButtonUnitHorizComponent } from "./button-unit-horiz/button-unit-horiz.component"
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../models/user.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../env";
import {catchError, Observable, tap} from "rxjs";

@Component({
  selector: `app-button-panel-horiz`,
  templateUrl: `./button-panel-horiz.component.html`,
  styleUrls: [`./button-panel-horiz.component.scss`],
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, ButtonUnitHorizComponent, NgClass, RouterLink],
})
export class ButtonPanelHorizComponent {
  showFiller: boolean = false;
  isUserAuthenticated: boolean = false;
  result: UserModel | undefined;
  routerLinkProfile: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  async fetchUserAndNavigate() {
    const data = await this.userService.getUser().toPromise();
    this.result = data;
    if(this.result?.id) {
      this.isUserAuthenticated = true;
      this.routerLinkProfile = `users/detail/${this.result?.id}`;
      this.router.navigate([this.routerLinkProfile]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  arrowLeftPicture: string = `./assets/icons/arrowLeft-withoutB.png`
  userPicture: string = `./assets/icons/user-withoutB.png`
  winePicture: string = `./assets/icons/drinkWine-withoutB.png`
  contactPicture: string = `./assets/icons/contact-withoutB.png`

  routerLinkBars: string = `/bars`
  routerLinkUsers: string = `/users`
  routerLinkLogin: string = `/login`

  isDrawerOpen: boolean = false

  toogleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen
  }
}
