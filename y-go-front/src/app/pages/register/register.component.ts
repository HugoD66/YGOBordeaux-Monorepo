import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { environment } from "../../../../env";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name: string;
  email: string;
  password: string


  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
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
      }
    );
  }
}
