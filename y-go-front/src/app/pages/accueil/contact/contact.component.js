"use strict"
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
Object.defineProperty(exports, `__esModule`, { value: true })
exports.ContactComponent = void 0
const core_1 = require(`@angular/core`)
const forms_1 = require(`@angular/forms`)
const input_1 = require(`@angular/material/input`)
const form_field_1 = require(`@angular/material/form-field`)
const common_1 = require(`@angular/common`)
const button_1 = require(`@angular/material/button`)
let ContactComponent = class ContactComponent {
  constructor() {
    this.showIcons = false
    // form
    this.email = new forms_1.FormControl(``, [forms_1.Validators.required, forms_1.Validators.email])
    this.message = new forms_1.FormControl(``, [forms_1.Validators.required, forms_1.Validators.minLength(20)])
    this.submitted = false
  }
  onWindowScroll() {
    this.handleScroll()
  }
  handleScroll() {
    const linerElement = document.querySelector(`.liner`)
    if (linerElement) {
      const pageHeight = document.documentElement.scrollHeight
      const rect = linerElement.getBoundingClientRect()
      const linerBot = rect.bottom
      const windowHeight = window.innerHeight
      /*
            console.log('rect' + rect)
            console.log('linerBot' + linerBot)
            console.log('windowHeight' + windowHeight)
            console.log(`La hauteur du haut de la page au bas de l'élément est ${linerBot}px`);
            console.log(`La hauteur de la fenêtre est ${windowHeight}px`);
             */
      this.showIcons = linerBot <= windowHeight
    }
  }
  sendEmail() {
    this.submitted = true
    if (this.email.invalid || this.message.invalid) {
      return
    }
    console.log(`email: ${this.email.value}`)
    console.log(`message: ${this.message.value}`)
  }
  getErrorMessage() {
    if (this.email.hasError(`required`)) {
      return `Vous devez entrer une adresse e-mail`
    }
    if (this.email.hasError(`email`)) {
      return `Entrez une adresse e-mail valide`
    }
    if (this.message.hasError(`required`)) {
      return `Vous devez entrer un message`
    }
    if (this.message.hasError(`minlength`)) {
      return `Le message doit contenir au moins 20 caractères`
    }
    return ``
  }
}
__decorate([(0, core_1.HostListener)(`window:scroll`, [])], ContactComponent.prototype, `onWindowScroll`, null)
ContactComponent = __decorate(
  [
    (0, core_1.Component)({
      selector: `app-contact`,
      templateUrl: `./contact.component.html`,
      styleUrls: [`./contact.component.scss`],
      standalone: true,
      imports: [
        form_field_1.MatFormFieldModule,
        input_1.MatInputModule,
        forms_1.FormsModule,
        forms_1.ReactiveFormsModule,
        common_1.NgIf,
        common_1.NgClass,
        button_1.MatButtonModule,
      ],
    }),
  ],
  ContactComponent
)
exports.ContactComponent = ContactComponent
