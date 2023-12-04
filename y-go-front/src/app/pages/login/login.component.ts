import { Component } from "@angular/core"
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, NgForm} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../../env";
import {catchError, throwError} from "rxjs";
@Component({
  selector: `app-login`,
  templateUrl: `./login.component.html`,
  styleUrls: [`./login.component.scss`],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
})
export class LoginComponent {
  email: string;
  password: string;
  hide = true;
  private apiUrl = environment.apiUrl;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.email = '';
    this.password = '';
  }
  onSubmit(form: NgForm) {
    const userData = {
      email: form.value.email,
      password: form.value.password,
    };
    console.log('userData :', userData);
    const url = `${this.apiUrl}/users/auth/login`;
    console.log(url);
    console.log('userData :', userData);
    this.http.post(url, userData).pipe(
      catchError(error => {
        console.error('Erreur HTTP :', error);
        // Handle the error here
        // For example, you can show a notification to the user
        // Then, rethrow the error to stop the execution
        return throwError(error);
      })
    ).subscribe(
      (response: any) => {
        localStorage.setItem('access_token', response.access_token);
        console.log('Réponse du backend :', response);
      }
    );
  }

  goHome() {
    this.router.navigate(['/']);
  }
  goRegister() {
    this.router.navigate(['/register']);
  }
}
