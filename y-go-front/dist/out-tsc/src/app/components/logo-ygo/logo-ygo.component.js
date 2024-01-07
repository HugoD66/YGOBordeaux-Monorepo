import { __decorate } from "tslib";
import { Component } from "@angular/core";
let LogoYGoComponent = class LogoYGoComponent {
  constructor(router) {
    this.router = router;
  }
  goHome() {
    this.router.navigate(["/"]);
  }
};
LogoYGoComponent = __decorate(
  [
    Component({
      selector: "app-logo-ygo",
      templateUrl: "./logo-ygo.component.html",
      standalone: true,
      styleUrls: ["./logo-ygo.component.scss"],
    }),
  ],
  LogoYGoComponent,
);
export { LogoYGoComponent };
//# sourceMappingURL=logo-ygo.component.js.map
