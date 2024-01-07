import { __decorate } from "tslib";
import { Component } from "@angular/core";
let DetailBarComponent = class DetailBarComponent {
  constructor(route, barService) {
    this.route = route;
    this.barService = barService;
    this.bar = this.barService.getBarById(
      this.route.snapshot.paramMap.get("id"),
    );
  }
  ngOnInit() {}
};
DetailBarComponent = __decorate(
  [
    Component({
      selector: "app-detail-bars",
      templateUrl: "./detail-bar.component.html",
      styleUrls: ["./detail-bar.component.scss"],
    }),
  ],
  DetailBarComponent,
);
export { DetailBarComponent };
//# sourceMappingURL=detail-bar.component.js.map
