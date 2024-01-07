import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
let ButtonUnitVerComponent = class ButtonUnitVerComponent {};
__decorate(
  [Input({ required: true })],
  ButtonUnitVerComponent.prototype,
  "src",
  void 0,
);
__decorate(
  [Input({ required: true })],
  ButtonUnitVerComponent.prototype,
  "isParentElement",
  void 0,
);
__decorate(
  [Input({ required: true })],
  ButtonUnitVerComponent.prototype,
  "routerLink",
  void 0,
);
ButtonUnitVerComponent = __decorate(
  [
    Component({
      selector: "app-button-unit-ver",
      templateUrl: "./button-unit-ver.component.html",
      styleUrls: ["./button-unit-ver.component.scss"],
      standalone: true,
      imports: [MatButtonModule, MatIconModule, RouterLink],
    }),
  ],
  ButtonUnitVerComponent,
);
export { ButtonUnitVerComponent };
//# sourceMappingURL=button-unit-ver.component.js.map
