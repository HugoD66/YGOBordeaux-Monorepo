import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../env';
import { catchError, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
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
})
export class LoginComponent {
  email: string;
  password: string;
  hide = true;
  private apiUrl = environment.apiUrl;
  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {
    this.email = ``;
    this.password = ``;
  }
  onSubmit(form: NgForm) {
    const userData = {
      email: form.value.email,
      password: form.value.password,
    };
    const url = `${this.apiUrl}/users/auth/login`;
    this.http
      .post(url, userData)
      .pipe(
        catchError((error) => {
          console.error(`Erreur HTTP :`, error);
          this.openSnackBar(`Erreur lors de l'envoi`, `Fermer`);
          return throwError(error);
        }),
      )
      .subscribe((response: any) => {
        localStorage.setItem(`access_token`, response.access_token);
        this.router.navigate([`/`]);
        this.openSnackBar(`Bienvenu, ${this.email} !`, `Fermer`);
      });
  }

  openSnackBar(message: string, action: string) {
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
}
