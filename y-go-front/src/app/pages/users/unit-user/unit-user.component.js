"use strict"
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
Object.defineProperty(exports, `__esModule`, { value: true })
exports.UnitUserComponent = void 0
const core_1 = require(`@angular/core`)
const card_1 = require(`@angular/material/card`)
const button_1 = require(`@angular/material/button`)
let UnitUserComponent = class UnitUserComponent {}
__decorate([(0, core_1.Input)()], UnitUserComponent.prototype, `user`, void 0)
UnitUserComponent = __decorate(
  [
    (0, core_1.Component)({
      selector: `app-unit-user`,
      templateUrl: `./unit-user.component.html`,
      styleUrls: [`./unit-user.component.scss`],
      standalone: true,
      imports: [card_1.MatCardModule, button_1.MatButtonModule],
    }),
  ],
  UnitUserComponent
)
exports.UnitUserComponent = UnitUserComponent
