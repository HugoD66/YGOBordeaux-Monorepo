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
exports.LoginComponent = void 0;
const core_1 = require(`@angular/core`);
const icon_1 = require(`@angular/material/icon`);
const input_1 = require(`@angular/material/input`);
const form_field_1 = require(`@angular/material/form-field`);
const button_1 = require(`@angular/material/button`);
const forms_1 = require(`@angular/forms`);
const env_1 = require(`../../../../env`);
const rxjs_1 = require(`rxjs`);
let LoginComponent = class LoginComponent {
  constructor(router, http, snackBar) {
    this.router = router;
    this.http = http;
    this.snackBar = snackBar;
    this.hide = true;
    this.apiUrl = env_1.environment.apiUrl;
    this.email = ``;
    this.password = ``;
  }
  onSubmit(form) {
    const userData = {
      email: form.value.email,
      password: form.value.password,
    };
    const url = `${this.apiUrl}/users/auth/login`;
    this.http
      .post(url, userData)
      .pipe(
        (0, rxjs_1.catchError)((error) => {
          console.error(`Erreur HTTP :`, error);
          this.openSnackBar(`Erreur lors de l'envoi`, `Fermer`);
          return (0, rxjs_1.throwError)(error);
        }),
      )
      .subscribe((response) => {
        localStorage.setItem(`access_token`, response.access_token);
        this.router.navigate([`/`]);
        this.openSnackBar(`Bienvenu, ${this.email} !`, `Fermer`);
      });
  }
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  goHome() {
    this.router.navigate([`/`]);
  }
  goRegister() {
    this.router.navigate([`/register`]);
  }
};
LoginComponent = __decorate(
  [
    (0, core_1.Component)({
      selector: `app-login`,
      templateUrl: `./login.component.html`,
      styleUrls: [`./login.component.scss`],
      standalone: true,
      imports: [
        form_field_1.MatFormFieldModule,
        input_1.MatInputModule,
        icon_1.MatIconModule,
        button_1.MatButtonModule,
        forms_1.FormsModule,
      ],
    }),
  ],
  LoginComponent,
);
exports.LoginComponent = LoginComponent;
