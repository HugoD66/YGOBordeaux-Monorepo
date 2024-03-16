"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === `object` && typeof Reflect.decorate === `function`)
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, `__esModule`, { value: true });
exports.AppModule = void 0;
const core_1 = require(`@angular/core`);
const platform_browser_1 = require(`@angular/platform-browser`);
const animations_1 = require(`@angular/platform-browser/animations`);
const sidenav_1 = require(`@angular/material/sidenav`);
const button_1 = require(`@angular/material/button`);
const icon_1 = require(`@angular/material/icon`);
const common_1 = require(`@angular/common`);
const forms_1 = require(`@angular/forms`);
const app_routing_module_1 = require(`./app-routing.module`);
const app_component_1 = require(`./app.component`);
const accueil_component_1 = require(`./pages/accueil/accueil.component`);
const button_panel_horiz_component_1 = require(
  `./components/button-panel/button-panel-horiz/button-panel-horiz.component`,
);
const button_unit_horiz_component_1 = require(
  `./components/button-panel/button-panel-horiz/button-unit-horiz/button-unit-horiz.component`,
);
const contact_component_1 = require(
  `./pages/accueil/contact/contact.component`,
);
const not_found_component_1 = require(`./pages/not-found/not-found.component`);
const accueil_nav_component_1 = require(
  `./pages/accueil/pres/accueil-nav/accueil-nav.component`,
);
const map_component_1 = require(`./pages/accueil/map/map/map.component`);
const page_map_component_1 = require(
  `./pages/accueil/map/page-map/page-map.component`,
);
const pres_component_1 = require(`./pages/accueil/pres/pres.component`);
const logo_ygo_component_1 = require(
  `./components/logo-ygo/logo-ygo.component`,
);
const input_1 = require(`@angular/material/input`);
const button_panel_ver_component_1 = require(
  `./components/button-panel/button-panel-ver/button-panel-ver.component`,
);
const button_unit_ver_component_1 = require(
  `./components/button-panel/button-panel-ver/button-unit-ver/button-unit-ver.component`,
);
const register_component_1 = require(`./pages/register/register.component`);
const http_1 = require(`@angular/common/http`);
const auth_interceptor_1 = require(`./auth.interceptor`);
const user_module_1 = require(`./pages/users/user.module`);
const bar_module_1 = require(`./pages/bars/bar.module`);
const add_bar_component_1 = require(`./pages/bars/add-bar/add-bar.component`);
const snackbar_component_1 = require(
  `./components/snackbar/snackbar.component`,
);
const snack_bar_1 = require(`@angular/material/snack-bar`);
let AppModule = class AppModule {};
AppModule = __decorate(
  [
    (0, core_1.NgModule)({
      declarations: [
        app_component_1.AppComponent,
        accueil_component_1.AccueilComponent,
        not_found_component_1.NotFoundComponent,
        map_component_1.MapComponent,
        page_map_component_1.PageMapComponent,
        pres_component_1.PresComponent,
        register_component_1.RegisterComponent,
        add_bar_component_1.AddBarComponent,
      ],
      imports: [
        http_1.HttpClientModule,
        forms_1.FormsModule,
        common_1.CommonModule,
        platform_browser_1.BrowserModule,
        app_routing_module_1.AppRoutingModule,
        animations_1.BrowserAnimationsModule,
        sidenav_1.MatSidenavModule,
        button_1.MatButtonModule,
        icon_1.MatIconModule,
        button_panel_horiz_component_1.ButtonPanelHorizComponent,
        button_unit_horiz_component_1.ButtonUnitHorizComponent,
        button_panel_ver_component_1.ButtonPanelVerComponent,
        button_unit_ver_component_1.ButtonUnitVerComponent,
        accueil_nav_component_1.AccueilNavComponent,
        contact_component_1.ContactComponent,
        logo_ygo_component_1.LogoYGoComponent,
        input_1.MatInputModule,
        snackbar_component_1.SnackbarComponent,
        user_module_1.UserModule,
        bar_module_1.BarModule,
        snack_bar_1.MatSnackBarModule,
      ],
      providers: [
        {
          provide: http_1.HTTP_INTERCEPTORS,
          useClass: auth_interceptor_1.AuthInterceptor,
          multi: true,
        },
      ],
      bootstrap: [app_component_1.AppComponent],
      exports: [map_component_1.MapComponent, map_component_1.MapComponent],
    }),
  ],
  AppModule,
);
exports.AppModule = AppModule;
