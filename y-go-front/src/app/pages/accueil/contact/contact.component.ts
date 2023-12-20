import {Component, HostListener} from "@angular/core"
import { FormControl, Validators, FormsModule, ReactiveFormsModule, NgForm } from "@angular/forms"
import { MatInputModule } from "@angular/material/input"
import { MatFormFieldModule } from "@angular/material/form-field"
import {NgClass, NgIf} from "@angular/common"
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: `app-contact`,
  templateUrl: `./contact.component.html`,
  styleUrls: [`./contact.component.scss`],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, NgClass, MatButtonModule],
})
export class ContactComponent {
  showIcons: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.handleScroll();

  }
  handleScroll() {
    const linerElement = document.querySelector(".liner");
    if (linerElement) {
      const pageHeight = document.documentElement.scrollHeight;
      const rect = linerElement.getBoundingClientRect();
      const linerBot = rect.bottom;
      const windowHeight = window.innerHeight;
      /*
      console.log('rect' + rect)
      console.log('linerBot' + linerBot)
      console.log('windowHeight' + windowHeight)
      console.log(`La hauteur du haut de la page au bas de l'élément est ${linerBot}px`);
      console.log(`La hauteur de la fenêtre est ${windowHeight}px`);
       */

      this.showIcons = linerBot <= windowHeight;
    }
  }

  //form
  email = new FormControl(``, [Validators.required, Validators.email])
  message = new FormControl(``, [Validators.required, Validators.minLength(20)])
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
    if (this.email.hasError('required')) {
      return 'Vous devez entrer une adresse e-mail';
    }

    if (this.email.hasError('email')) {
      return 'Entrez une adresse e-mail valide';
    }

    if (this.message.hasError('required')) {
      return 'Vous devez entrer un message';
    }

    if (this.message.hasError('minlength')) {
      return 'Le message doit contenir au moins 20 caractères';
    }
    return '';
  }
}
