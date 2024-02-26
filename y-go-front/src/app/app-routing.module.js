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
exports.AppRoutingModule = void 0
const core_1 = require(`@angular/core`)
const router_1 = require(`@angular/router`)
const accueil_component_1 = require(`./pages/accueil/accueil.component`)
const not_found_component_1 = require(`./pages/not-found/not-found.component`)
const login_component_1 = require(`./pages/login/login.component`)
const bars_component_1 = require(`./pages/bars/bars.component`)
const detail_bar_component_1 = require(`./pages/bars/detail-bar/detail-bar.component`)
const register_component_1 = require(`./pages/register/register.component`)
const users_component_1 = require(`./pages/users/users.component`)
const add_bar_component_1 = require(`./pages/bars/add-bar/add-bar.component`)
const detail_user_component_1 = require(`./pages/users/detail-user/detail-user.component`)
const routes = [
  { path: `login`, component: login_component_1.LoginComponent },
  { path: `register`, component: register_component_1.RegisterComponent },
  {
    path: `bars`,
    children: [
      { path: ``, component: bars_component_1.BarsComponent },
      { path: `add-bar`, component: add_bar_component_1.AddBarComponent },
      {
        path: `detail/:id`,
        component: detail_bar_component_1.DetailBarComponent,
      },
    ],
  },
  {
    path: `users`,
    children: [
      { path: ``, component: users_component_1.UsersComponent },
      {
        path: `detail/:id`,
        component: detail_user_component_1.DetailUserComponent,
      },
    ],
  },
  { path: ``, component: accueil_component_1.AccueilComponent },
  { path: `**`, component: not_found_component_1.NotFoundComponent },
]
let AppRoutingModule = class AppRoutingModule {}
AppRoutingModule = __decorate(
  [
    (0, core_1.NgModule)({
      imports: [router_1.RouterModule.forRoot(routes)],
      exports: [router_1.RouterModule],
    }),
  ],
  AppRoutingModule
)
exports.AppRoutingModule = AppRoutingModule
