import { __decorate } from "tslib";
import { Component, HostListener } from "@angular/core";
let PageMapComponent = class PageMapComponent {
  constructor() {
    this.showBackgroundImage = false;
  }
  onWindowScroll() {
    this.handleScroll();
  }
  handleScroll() {
    const linerElement = document.querySelector(".liner");
    if (linerElement) {
      const rect = linerElement.getBoundingClientRect();
      const linerTop = rect.top;
      this.showBackgroundImage = linerTop <= 0;
    }
  }
};
__decorate(
  [HostListener("window:scroll", [])],
  PageMapComponent.prototype,
  "onWindowScroll",
  null,
);
PageMapComponent = __decorate(
  [
    Component({
      selector: "app-page-map",
      templateUrl: "./page-map.component.html",
      styleUrls: ["./page-map.component.scss"],
    }),
  ],
  PageMapComponent,
);
export { PageMapComponent };
//# sourceMappingURL=page-map.component.js.map
