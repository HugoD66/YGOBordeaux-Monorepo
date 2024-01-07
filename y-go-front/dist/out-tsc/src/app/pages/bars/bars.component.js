import { __decorate } from "tslib";
import { Component } from "@angular/core";
let BarsComponent = class BarsComponent {
  constructor(barService) {
    this.barService = barService;
  }
  ngOnInit() {
    this.barService
      .getBarsList()
      .subscribe((barList) => (this.barList = barList));
    console.log(this.barList);
  }
};
BarsComponent = __decorate(
  [
    Component({
      selector: `app-bars`,
      templateUrl: `./bars.component.html`,
      styleUrls: [`./bars.component.scss`],
    }),
  ],
  BarsComponent,
);
export { BarsComponent };
//# sourceMappingURL=bars.component.js.map
