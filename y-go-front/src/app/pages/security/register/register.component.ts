import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { environment } from '../../../../../env';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {SnackbarService} from "../../../components/snackbar/snackbar.component";

@Component({
  selector: `app-register`,
  templateUrl: `./register.component.html`,
  styleUrls: [`./register.component.scss`],
  providers: [SnackbarService]
})
export class RegisterComponent {
  registerForm: FormGroup;
  hide = true;
  private apiUrl = environment.apiUrl;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBarService: SnackbarService,
  ) {
    this.registerForm = this.fb.group({
      name: [
        ``,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      email: [``, [Validators.required, Validators.email]],
      password: [``, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(`userData :`, this.registerForm.value);
      const url = `${this.apiUrl}/users/auth/register`;
      this.http.post(url, this.registerForm.value).subscribe(
        (response) => {
          console.log(`Réponse du backend :`, response);
          this.router.navigate([`/login`]);
          this.snackBarService.openSnackBar(`Enregistrement réussi !`, `Fermer`);
        },
        (error) => {
          console.error(`Erreur HTTP :`, error);
          this.snackBarService.openSnackBar(`${error.error.message}`, `Fermer`);
        },
      );
    } else {
    }
  }

  //onSubmit(form: NgForm) {
  //  const userData = {
  //    name: form.value.name,
  //    email: form.value.email,
  //    password: form.value.password,
  //  };
  //  console.log(`userData :`, userData);
  //  const url = `${this.apiUrl}/users/auth/register`;
  //  console.log(`userData :`, userData);
  //  this.http.post(url, userData).subscribe(
  //    (response) => {
  //      console.log(`Réponse du backend :`, response);
  //      this.router.navigate([`/login`]);
  //      this.openSnackBar(`Enregistrement réussi !`, `Fermer`);
  //    },
  //    (error) => {
  //      console.error(`Erreur HTTP :`, error);
  //      this.errorMessage = error.error.message;
  //      this.openSnackBar(`${error.error.message}`, `Fermer`);
  //    },
  //  );
  //}

  goHome() {
    this.router.navigate([`/`]);
  }
}
