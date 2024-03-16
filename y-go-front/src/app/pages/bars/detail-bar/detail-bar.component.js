"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, `__esModule`, { value: true });
exports.DetailBarComponent = void 0;
const core_1 = require(`@angular/core`);
let DetailBarComponent = class DetailBarComponent {
  constructor(route, barService) {
    this.route = route;
    this.barService = barService;
    this.bar = this.barService.getBarById(
      this.route.snapshot.paramMap.get(`id`),
    );
  }
  ngOnInit() {}
};
DetailBarComponent = __decorate(
  [
    (0, core_1.Component)({
      selector: `app-detail-bars`,
      templateUrl: `./detail-bar.component.html`,
      styleUrls: [`./detail-bar.component.scss`],
    }),
  ],
  DetailBarComponent,
);
exports.DetailBarComponent = DetailBarComponent;
