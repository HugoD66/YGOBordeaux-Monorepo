import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { UserService } from "../../services/user.service";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "../article/user-list/user-list.component";
import { UsersComponent } from "./users.component";
import { DetailUserComponent } from "./detail-user/detail-user.component";
import { UnitBarComponent } from "../bars/unit-bar/unit-bar.component";
import { ButtonPanelHorizComponent } from "../../components/button-panel/button-panel-horiz/button-panel-horiz.component";
import { LogoYGoComponent } from "../../components/logo-ygo/logo-ygo.component";
import { UnitUserComponent } from './unit-user/unit-user.component';
let UserModule = class UserModule {
};
UserModule = __decorate([
    NgModule({
        declarations: [
            UsersComponent,
            UserListComponent,
            DetailUserComponent,
        ],
        providers: [UserService],
        imports: [
            CommonModule,
            UnitBarComponent,
            ButtonPanelHorizComponent,
            LogoYGoComponent,
            UnitUserComponent,
        ],
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=user.module.js.map