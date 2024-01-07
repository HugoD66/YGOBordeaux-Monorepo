import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { LoginComponent } from "./pages/login/login.component";
import { BarsComponent } from "./pages/bars/bars.component";
import { DetailBarComponent } from "./pages/bars/detail-bar/detail-bar.component";
import { RegisterComponent } from "./pages/register/register.component";
import { UsersComponent } from "./pages/users/users.component";
import { AddBarComponent } from "./pages/bars/add-bar/add-bar.component";
const routes = [
  { path: `login`, component: LoginComponent },
  { path: `register`, component: RegisterComponent },
  {
    path: "bars",
    children: [
      { path: "", component: BarsComponent },
      { path: "add-bar", component: AddBarComponent },
      { path: "detail/:id", component: DetailBarComponent },
    ],
  },
  {
    path: "users",
    children: [
      { path: "", component: UsersComponent },
      { path: "detail/:id", component: DetailBarComponent },
    ],
  },
  { path: ``, component: AccueilComponent },
  { path: `**`, component: NotFoundComponent },
];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = __decorate(
  [
    NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
    }),
  ],
  AppRoutingModule,
);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
