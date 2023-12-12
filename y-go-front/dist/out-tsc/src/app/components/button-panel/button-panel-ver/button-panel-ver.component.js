import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ButtonUnitHorizComponent } from "../button-panel-horiz/button-unit-horiz/button-unit-horiz.component";
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";
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
    Component({
        selector: 'app-button-panel-ver',
        templateUrl: './button-panel-ver.component.html',
        styleUrls: ['./button-panel-ver.component.scss'],
        imports: [MatSidenavModule, MatButtonModule, MatIconModule, ButtonUnitHorizComponent, NgClass, RouterLink],
        standalone: true
    })
], ButtonPanelVerComponent);
export { ButtonPanelVerComponent };
//# sourceMappingURL=button-panel-ver.component.js.map