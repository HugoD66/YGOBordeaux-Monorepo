import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { environment } from "../../../../env";
let RegisterComponent = class RegisterComponent {
  constructor(http, router, snackBar) {
    this.http = http;
    this.router = router;
    this.snackBar = snackBar;
    this.hide = true;
    this.apiUrl = environment.apiUrl;
    this.name = "";
    this.email = "";
    this.password = "";
  }
  onSubmit(form) {
    const userData = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      //password_confirmation: form.value.password_confirmation,
    };
    console.log("userData :", userData);
    const url = `${this.apiUrl}/users/auth/register`;
    console.log("userData :", userData);
    this.http.post(url, userData).subscribe(
      (response) => {
        console.log("Réponse du backend :", response);
        this.router.navigate(["/login"]);
        this.openSnackBar("Enregistrement réussi !", "Fermer");
      },
      (error) => {
        console.error("Erreur HTTP :", error);
        this.errorMessage = error.error.message;
        this.openSnackBar(`${error.error.message}`, "Fermer");
      },
    );
  }
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  goHome() {
    this.router.navigate(["/"]);
  }
};
RegisterComponent = __decorate(
  [
    Component({
      selector: "app-register",
      templateUrl: "./register.component.html",
      styleUrls: ["./register.component.scss"],
    }),
  ],
  RegisterComponent,
);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map
