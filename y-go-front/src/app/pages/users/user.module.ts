import {NgModule} from "@angular/core";
import {UserService} from "../../services/user.service";
import {CommonModule} from "@angular/common";
import {BarsComponent} from "../bars/bars.component";
import {BarsAndUsersComponent} from "../accueil/bars-and-users/bars-and-users.component";
import {UserListComponent} from "../article/user-list/user-list.component";
import {UsersComponent} from "./users.component";
import {DetailUserComponent} from "./detail-user/detail-user.component";
import {UnitBarComponent} from "../bars/unit-bar/unit-bar.component";

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    DetailUserComponent,

  ],
  providers: [UserService],
  imports: [
    CommonModule,
    UnitBarComponent,

  ],
  }
)
export class UserModule {

}
