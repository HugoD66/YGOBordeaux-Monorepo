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
exports.SnackbarComponent = void 0
const core_1 = require(`@angular/core`)
const form_field_1 = require(`@angular/material/form-field`)
const input_1 = require(`@angular/material/input`)
const button_1 = require(`@angular/material/button`)
let SnackbarComponent = class SnackbarComponent {
  constructor(_snackBar) {
    this._snackBar = _snackBar
    this.message = ``
    this.action = ``
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action)
  }
}
SnackbarComponent = __decorate(
  [
    (0, core_1.Component)({
      selector: `app-snackbar`,
      templateUrl: `./snackbar.component.html`,
      styleUrls: [`./snackbar.component.scss`],
      standalone: true,
      imports: [form_field_1.MatFormFieldModule, input_1.MatInputModule, button_1.MatButtonModule],
    }),
  ],
  SnackbarComponent
)
exports.SnackbarComponent = SnackbarComponent
