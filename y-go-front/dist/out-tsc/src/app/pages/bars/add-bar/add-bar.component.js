import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { environment } from "../../../../../env";
let AddBarComponent = class AddBarComponent {
    constructor(barService) {
        this.barService = barService;
        this.apiUrl = environment.apiUrl;
        this.name = '';
        this.adresse = '';
    }
    onSubmit(form) {
        const barData = {
            name: form.value.name,
            adresse: form.value.adresse,
        };
        this.barService.addBar(barData).subscribe((response) => {
            console.log('Réponse du backend :', response);
        }, (error) => {
            console.error('Erreur HTTP :', error);
            this.errorMessage = error.error.message;
        });
    }
};
AddBarComponent = __decorate([
    Component({
        selector: 'app-add-bars',
        templateUrl: './add-bar.component.html',
        styleUrls: ['./add-bar.component.scss']
    })
], AddBarComponent);
export { AddBarComponent };
//# sourceMappingURL=add-bar.component.js.map