import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgIf } from "@angular/common";
import { ButtonUnitHorizComponent } from "../../../../components/button-panel/button-panel-horiz/button-unit-horiz/button-unit-horiz.component";
let AccueilNavComponent = class AccueilNavComponent {
  constructor(userService, router) {
    this.userService = userService;
    this.router = router;
    this.isAuthenticated = false;
    this.routerLinkProfile = "";
  }
  ngOnInit() {
    try {
      this.userService.getUser().subscribe((data) => {
        this.result = data;
        if (this.result) {
          this.isAuthenticated = true;
          console.log(this.result);
        }
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  onLogout() {
    this.userService.logout();
    this.isAuthenticated = false;
  }
  async fetchUserAndNavigate() {
    const data = await this.userService.getUser().toPromise();
    this.result = data;
    if (this.result?.id) {
      this.isAuthenticated = true;
      this.routerLinkProfile = `users/detail/${this.result?.id}`;
      this.router.navigate([this.routerLinkProfile]);
    }
  }
};
AccueilNavComponent = __decorate(
  [
    Component({
      selector: `app-accueil-nav`,
      templateUrl: `./accueil-nav.component.html`,
      styleUrls: [`./accueil-nav.component.scss`],
      standalone: true,
      imports: [
        NgIf,
        MatListModule,
        MatDividerModule,
        MatButtonModule,
        RouterLinkActive,
        RouterLink,
        ButtonUnitHorizComponent,
      ],
    }),
  ],
  AccueilNavComponent,
);
export { AccueilNavComponent };
//# sourceMappingURL=accueil-nav.component.js.map
