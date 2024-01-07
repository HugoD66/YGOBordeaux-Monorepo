"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, `__esModule`, { value: true });
exports.AddBarComponent = void 0;
const core_1 = require(`@angular/core`);
const env_1 = require(`../../../../../env`);
let AddBarComponent = class AddBarComponent {
  constructor(barService) {
    this.barService = barService;
    this.apiUrl = env_1.environment.apiUrl;
    this.name = ``;
    this.adresse = ``;
  }
  onSubmit(form) {
    const barData = {
      name: form.value.name,
      adresse: form.value.adresse,
    };
    this.barService.addBar(barData).subscribe(
      (response) => {
        console.log(`Réponse du backend :`, response);
      },
      (error) => {
        console.error(`Erreur HTTP :`, error);
        this.errorMessage = error.error.message;
      },
    );
  }
};
AddBarComponent = __decorate(
  [
    (0, core_1.Component)({
      selector: `app-add-bars`,
      templateUrl: `./add-bar.component.html`,
      styleUrls: [`./add-bar.component.scss`],
    }),
  ],
  AddBarComponent,
);
exports.AddBarComponent = AddBarComponent;
