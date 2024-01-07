import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
let UnitBarComponent = class UnitBarComponent {
  constructor(router) {
    this.router = router;
  }
  goDetailBar() {
    this.router.navigate([`/bars/detail/${this.bar?.id}`]);
  }
};
__decorate([Input()], UnitBarComponent.prototype, "bar", void 0);
UnitBarComponent = __decorate(
  [
    Component({
      selector: `app-unit-bar`,
      templateUrl: `./unit-bar.component.html`,
      styleUrls: [`./unit-bar.component.scss`],
      standalone: true,
      imports: [MatCardModule, MatButtonModule],
    }),
  ],
  UnitBarComponent,
);
export { UnitBarComponent };
//# sourceMappingURL=unit-bar.component.js.map
