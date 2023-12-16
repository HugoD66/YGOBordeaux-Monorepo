"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitBarComponent = void 0;
const core_1 = require("@angular/core");
const button_1 = require("@angular/material/button");
const card_1 = require("@angular/material/card");
let UnitBarComponent = class UnitBarComponent {
    constructor(router) {
        this.router = router;
    }
    goDetailBar() {
        var _a;
        this.router.navigate([`/bars/detail/${(_a = this.bar) === null || _a === void 0 ? void 0 : _a.id}`]);
    }
};
__decorate([
    (0, core_1.Input)()
], UnitBarComponent.prototype, "bar", void 0);
UnitBarComponent = __decorate([
    (0, core_1.Component)({
        selector: `app-unit-bar`,
        templateUrl: `./unit-bar.component.html`,
        styleUrls: [`./unit-bar.component.scss`],
        standalone: true,
        imports: [card_1.MatCardModule, button_1.MatButtonModule],
    })
], UnitBarComponent);
exports.UnitBarComponent = UnitBarComponent;
