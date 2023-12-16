"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonPanelVerComponent = void 0;
const core_1 = require("@angular/core");
const sidenav_1 = require("@angular/material/sidenav");
const button_1 = require("@angular/material/button");
const icon_1 = require("@angular/material/icon");
const button_unit_horiz_component_1 = require("../button-panel-horiz/button-unit-horiz/button-unit-horiz.component");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
let ButtonPanelVerComponent = class ButtonPanelVerComponent {
    constructor() {
        this.showFiller = false;
        this.arrowLeftPicture = `./assets/icons/arrowLeft-withoutB.png`;
        this.userPicture = `./assets/icons/user-withoutB.png`;
        this.winePicture = `./assets/icons/drinkWine-withoutB.png`;
        this.contactPicture = `./assets/icons/contact-withoutB.png`;
        this.routerLinkLogin = `/login`;
        this.routerLinkBars = `/bars`;
        this.isDrawerOpen = false;
    }
    toogleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
    }
};
ButtonPanelVerComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-button-panel-ver',
        templateUrl: './button-panel-ver.component.html',
        styleUrls: ['./button-panel-ver.component.scss'],
        imports: [sidenav_1.MatSidenavModule, button_1.MatButtonModule, icon_1.MatIconModule, button_unit_horiz_component_1.ButtonUnitHorizComponent, common_1.NgClass, router_1.RouterLink],
        standalone: true
    })
], ButtonPanelVerComponent);
exports.ButtonPanelVerComponent = ButtonPanelVerComponent;
