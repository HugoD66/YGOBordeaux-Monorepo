"use strict"
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
Object.defineProperty(exports, `__esModule`, { value: true })
exports.UserModule = void 0
const core_1 = require(`@angular/core`)
const user_service_1 = require(`../../services/user.service`)
const common_1 = require(`@angular/common`)
const user_list_component_1 = require(`../article/user-list/user-list.component`)
const users_component_1 = require(`./users.component`)
const detail_user_component_1 = require(`./detail-user/detail-user.component`)
const unit_bar_component_1 = require(`../bars/unit-bar/unit-bar.component`)
const button_panel_horiz_component_1 = require(
  `../../components/button-panel/button-panel-horiz/button-panel-horiz.component`
)
const logo_ygo_component_1 = require(`../../components/logo-ygo/logo-ygo.component`)
const unit_user_component_1 = require(`./unit-user/unit-user.component`)
let UserModule = class UserModule {}
UserModule = __decorate(
  [
    (0, core_1.NgModule)({
      declarations: [
        users_component_1.UsersComponent,
        user_list_component_1.UserListComponent,
        detail_user_component_1.DetailUserComponent,
      ],
      providers: [user_service_1.UserService],
      imports: [
        common_1.CommonModule,
        unit_bar_component_1.UnitBarComponent,
        button_panel_horiz_component_1.ButtonPanelHorizComponent,
        logo_ygo_component_1.LogoYGoComponent,
        unit_user_component_1.UnitUserComponent,
      ],
    }),
  ],
  UserModule
)
exports.UserModule = UserModule
