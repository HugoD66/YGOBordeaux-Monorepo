import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { environment } from "../../../../env";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMessage: any
  name: string;
  email: string;
  password: string;
  hide = true;
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router:Router
  ) {
    this.name = '';
    this.email = '';
    this.password = '';
  }

  onSubmit(form: NgForm) {
    const userData = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      //password_confirmation: form.value.password_confirmation,
    };
    console.log('userData :', userData);
    const url = `${this.apiUrl}/users/auth/register`;
    console.log('userData :', userData);
    this.http.post(url, userData).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);
      },
      (error) => {
        console.error('Erreur HTTP :', error);
        this.errorMessage = error.error.message; // Supposons que le serveur renvoie un champ 'message' dans l'erreur

      }
    );
  }
  goHome() {
    this.router.navigate(['/']);
  }
}
