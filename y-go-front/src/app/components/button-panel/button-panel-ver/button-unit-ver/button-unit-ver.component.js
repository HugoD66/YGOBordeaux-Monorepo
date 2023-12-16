"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonUnitVerComponent = void 0;
const core_1 = require("@angular/core");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const router_1 = require("@angular/router");
let ButtonUnitVerComponent = class ButtonUnitVerComponent {
};
__decorate([
    (0, core_1.Input)({ required: true })
], ButtonUnitVerComponent.prototype, "src", void 0);
__decorate([
    (0, core_1.Input)({ required: true })
], ButtonUnitVerComponent.prototype, "isParentElement", void 0);
__decorate([
    (0, core_1.Input)({ required: true })
], ButtonUnitVerComponent.prototype, "routerLink", void 0);
ButtonUnitVerComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-button-unit-ver',
        templateUrl: './button-unit-ver.component.html',
        styleUrls: ['./button-unit-ver.component.scss'],
        standalone: true,
        imports: [button_1.MatButtonModule, icon_1.MatIconModule, router_1.RouterLink],
    })
], ButtonUnitVerComponent);
exports.ButtonUnitVerComponent = ButtonUnitVerComponent;
