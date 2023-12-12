import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
let ButtonUnitHorizComponent = class ButtonUnitHorizComponent {
};
__decorate([
    Input({ required: true })
], ButtonUnitHorizComponent.prototype, "src", void 0);
__decorate([
    Input({ required: true })
], ButtonUnitHorizComponent.prototype, "isParentElement", void 0);
__decorate([
    Input()
], ButtonUnitHorizComponent.prototype, "routerLink", void 0);
ButtonUnitHorizComponent = __decorate([
    Component({
        selector: `app-button-unit`,
        templateUrl: `./button-unit-horiz.component.html`,
        styleUrls: [`./button-unit-horiz.component.scss`],
        standalone: true,
        imports: [MatButtonModule, MatIconModule, RouterLink],
    })
], ButtonUnitHorizComponent);
export { ButtonUnitHorizComponent };
//# sourceMappingURL=button-unit-horiz.component.js.map