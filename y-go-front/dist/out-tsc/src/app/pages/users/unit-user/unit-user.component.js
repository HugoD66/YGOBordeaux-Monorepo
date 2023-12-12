import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
let UnitUserComponent = class UnitUserComponent {
};
__decorate([
    Input()
], UnitUserComponent.prototype, "user", void 0);
UnitUserComponent = __decorate([
    Component({
        selector: 'app-unit-user',
        templateUrl: './unit-user.component.html',
        styleUrls: ['./unit-user.component.scss'],
        standalone: true,
        imports: [MatCardModule, MatButtonModule],
    })
], UnitUserComponent);
export { UnitUserComponent };
//# sourceMappingURL=unit-user.component.js.map