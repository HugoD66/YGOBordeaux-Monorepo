import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { environment } from "../../../../env";
import { catchError, throwError } from "rxjs";
let LoginComponent = class LoginComponent {
  constructor(router, http, snackBar) {
    this.router = router;
    this.http = http;
    this.snackBar = snackBar;
    this.hide = true;
    this.apiUrl = environment.apiUrl;
    this.email = "";
    this.password = "";
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
        catchError((error) => {
          console.error("Erreur HTTP :", error);
          this.openSnackBar(`Erreur lors de l'envoi`, "Fermer");
          return throwError(error);
        }),
      )
      .subscribe((response) => {
        localStorage.setItem("access_token", response.access_token);
        this.router.navigate(["/"]);
        this.openSnackBar(`Bienvenu, ${this.email} !`, "Fermer");
      });
  }
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  goRegister() {
    this.router.navigate(["/register"]);
  }
};
LoginComponent = __decorate(
  [
    Component({
      selector: `app-login`,
      templateUrl: `./login.component.html`,
      styleUrls: [`./login.component.scss`],
      standalone: true,
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
      ],
    }),
  ],
  LoginComponent,
);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map
