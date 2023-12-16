"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonPanelHorizComponent = void 0;
const core_1 = require("@angular/core");
const button_1 = require("@angular/material/button");
const sidenav_1 = require("@angular/material/sidenav");
const icon_1 = require("@angular/material/icon");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const button_unit_horiz_component_1 = require("./button-unit-horiz/button-unit-horiz.component");
let ButtonPanelHorizComponent = class ButtonPanelHorizComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.showFiller = false;
        this.isUserAuthenticated = false;
        this.routerLinkProfile = '';
        this.arrowLeftPicture = `./assets/icons/arrowLeft-withoutB.png`;
        this.userPicture = `./assets/icons/user-withoutB.png`;
        this.winePicture = `./assets/icons/drinkWine-withoutB.png`;
        this.contactPicture = `./assets/icons/contact-withoutB.png`;
        this.routerLinkBars = `/bars`;
        this.routerLinkUsers = `/users`;
        this.routerLinkLogin = `/login`;
        this.isDrawerOpen = false;
    }
    fetchUserAndNavigate() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.userService.getUser().toPromise();
            this.result = data;
            if ((_a = this.result) === null || _a === void 0 ? void 0 : _a.id) {
                this.isUserAuthenticated = true;
                this.routerLinkProfile = `users/detail/${(_b = this.result) === null || _b === void 0 ? void 0 : _b.id}`;
                this.router.navigate([this.routerLinkProfile]);
            }
            else {
                this.router.navigate(['/login']);
            }
        });
    }
    toogleDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
    }
};
ButtonPanelHorizComponent = __decorate([
    (0, core_1.Component)({
        selector: `app-button-panel-horiz`,
        templateUrl: `./button-panel-horiz.component.html`,
        styleUrls: [`./button-panel-horiz.component.scss`],
        standalone: true,
        imports: [sidenav_1.MatSidenavModule, button_1.MatButtonModule, icon_1.MatIconModule, button_unit_horiz_component_1.ButtonUnitHorizComponent, common_1.NgClass, router_1.RouterLink],
    })
], ButtonPanelHorizComponent);
exports.ButtonPanelHorizComponent = ButtonPanelHorizComponent;
