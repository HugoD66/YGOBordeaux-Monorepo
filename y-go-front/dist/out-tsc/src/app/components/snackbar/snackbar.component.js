import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
let SnackbarComponent = class SnackbarComponent {
  constructor(_snackBar) {
    this._snackBar = _snackBar;
    this.message = "";
    this.action = "";
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action);
  }
};
SnackbarComponent = __decorate(
  [
    Component({
      selector: "app-snackbar",
      templateUrl: "./snackbar.component.html",
      styleUrls: ["./snackbar.component.scss"],
      standalone: true,
      imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
    }),
  ],
  SnackbarComponent,
);
export { SnackbarComponent };
//# sourceMappingURL=snackbar.component.js.map
