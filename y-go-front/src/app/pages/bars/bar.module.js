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
exports.BarModule = void 0
const core_1 = require(`@angular/core`)
const bar_service_1 = require(`../../services/bar.service`)
const common_1 = require(`@angular/common`)
const bars_component_1 = require(`./bars.component`)
const bars_and_users_component_1 = require(`../accueil/bars-and-users/bars-and-users.component`)
const detail_bar_component_1 = require(`./detail-bar/detail-bar.component`)
const search_bar_component_1 = require(`../../components/search-bar/search-bar.component`)
const button_panel_horiz_component_1 = require(
  `../../components/button-panel/button-panel-horiz/button-panel-horiz.component`
)
const unit_bar_component_1 = require(`./unit-bar/unit-bar.component`)
const logo_ygo_component_1 = require(`../../components/logo-ygo/logo-ygo.component`)
const input_1 = require(`@angular/material/input`)
const icon_1 = require(`@angular/material/icon`)
const forms_1 = require(`@angular/forms`)
const button_1 = require(`@angular/material/button`)
const button_panel_ver_component_1 = require(
  `../../components/button-panel/button-panel-ver/button-panel-ver.component`
)
const loader_1 = require(`../../loader/loader`)
let BarModule = class BarModule {}
BarModule = __decorate(
  [
    (0, core_1.NgModule)({
      declarations: [
        bars_component_1.BarsComponent,
        bars_and_users_component_1.BarsAndUsersComponent,
        detail_bar_component_1.DetailBarComponent,
        search_bar_component_1.SearchBarComponent,
        loader_1.LoaderComponent,
      ],
      providers: [bar_service_1.BarService],
      imports: [
        common_1.CommonModule,
        button_panel_horiz_component_1.ButtonPanelHorizComponent,
        unit_bar_component_1.UnitBarComponent,
        logo_ygo_component_1.LogoYGoComponent,
        input_1.MatInputModule,
        icon_1.MatIconModule,
        forms_1.FormsModule,
        button_1.MatButtonModule,
        button_panel_ver_component_1.ButtonPanelVerComponent,
      ],
      exports: [bars_and_users_component_1.BarsAndUsersComponent],
    }),
  ],
  BarModule
)
exports.BarModule = BarModule
