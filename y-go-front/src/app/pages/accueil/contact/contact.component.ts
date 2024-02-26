import { Component, HostListener } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: `app-contact`,
  templateUrl: `./contact.component.html`,
  styleUrls: [`./contact.component.scss`],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class ContactComponent {
  showIcons: boolean = false;

  @HostListener(`window:scroll`, [])
  onWindowScroll() {
    this.handleScroll();
  }
  handleScroll() {
    const socialsElement = document.querySelector(`.reseaux-sociaux`);
    if (socialsElement) {
      const rect = socialsElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      this.showIcons = isVisible;
    }
  }

  // form
  email = new FormControl(``, [Validators.required, Validators.email]);
  message = new FormControl(``, [
    Validators.required,
    Validators.minLength(20),
    Validators.maxLength(250)
  ]);
  submitted = false;
  sendEmail() {
    this.submitted = true;
    if (this.email.invalid || this.message.invalid) {
      return;
    }
    console.log(`email: ${this.email.value}`);
    console.log(`message: ${this.message.value}`);
  }
  getErrorMessage() {
    if (this.email.hasError(`required`)) {
      return `Vous devez entrer une adresse e-mail`;
    }

    if (this.email.hasError(`email`)) {
      return `Entrez une adresse e-mail valide`;
    }

    if (this.message.hasError(`required`)) {
      return `Vous devez entrer un message`;
    }

    if (this.message.hasError(`minlength`)) {
      return `Le message doit contenir au moins 20 caractères`;
    }
    return ``;
  }
}
