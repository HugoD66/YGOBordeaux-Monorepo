import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
import { ButtonUnitHorizComponent } from "./button-unit-horiz/button-unit-horiz.component";
let ButtonPanelHorizComponent = class ButtonPanelHorizComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
    this.showFiller = false;
    this.isUserAuthenticated = false;
    this.routerLinkProfile = "";
    this.arrowLeftPicture = `./assets/icons/arrowLeft-withoutB.png`;
    this.userPicture = `./assets/icons/user-withoutB.png`;
    this.winePicture = `./assets/icons/drinkWine-withoutB.png`;
    this.contactPicture = `./assets/icons/contact-withoutB.png`;
    this.routerLinkBars = `/bars`;
    this.routerLinkUsers = `/users`;
    this.routerLinkLogin = `/login`;
    this.isDrawerOpen = false;
  }
  async fetchUserAndNavigate() {
    const data = await this.userService.getUser().toPromise();
    this.result = data;
    if (this.result?.id) {
      this.isUserAuthenticated = true;
      this.routerLinkProfile = `users/detail/${this.result?.id}`;
      this.router.navigate([this.routerLinkProfile]);
    } else {
      this.router.navigate(["/login"]);
    }
  }
  toogleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
};
ButtonPanelHorizComponent = __decorate(
  [
    Component({
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
    }),
  ],
  ButtonPanelHorizComponent,
);
export { ButtonPanelHorizComponent };
//# sourceMappingURL=button-panel-horiz.component.js.map
