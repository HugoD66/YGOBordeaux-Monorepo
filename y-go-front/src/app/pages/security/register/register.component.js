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
exports.RegisterComponent = void 0;
const core_1 = require(`@angular/core`);
const env_1 = require(`../../../../env`);
let RegisterComponent = class RegisterComponent {
  constructor(http, router, snackBar) {
    this.http = http;
    this.router = router;
    this.snackBar = snackBar;
    this.hide = true;
    this.apiUrl = env_1.environment.apiUrl;
    this.name = ``;
    this.email = ``;
    this.password = ``;
  }
  onSubmit(form) {
    const userData = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      // password_confirmation: form.value.password_confirmation,
    };
    console.log(`userData :`, userData);
    const url = `${this.apiUrl}/users/auth/register`;
    console.log(`userData :`, userData);
    this.http.post(url, userData).subscribe(
      (response) => {
        console.log(`Réponse du backend :`, response);
        this.router.navigate([`/login`]);
        this.openSnackBar(`Enregistrement réussi !`, `Fermer`);
      },
      (error) => {
        console.error(`Erreur HTTP :`, error);
        this.errorMessage = error.error.message;
        this.openSnackBar(`${error.error.message}`, `Fermer`);
      },
    );
  }
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  goHome() {
    this.router.navigate([`/`]);
  }
};
RegisterComponent = __decorate(
  [
    (0, core_1.Component)({
      selector: `app-register`,
      templateUrl: `./register.component.html`,
      styleUrls: [`./register.component.scss`],
    }),
  ],
  RegisterComponent,
);
exports.RegisterComponent = RegisterComponent;
