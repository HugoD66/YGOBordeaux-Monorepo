import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/security/login/login.component';
import { BarsComponent } from './pages/bars/bars.component';
import { DetailBarComponent } from './pages/bars/detail-bar/detail-bar.component';
import { RegisterComponent } from './pages/security/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { AddBarComponent } from './pages/bars/add-bar/add-bar.component';
import { DetailUserComponent } from './pages/users/detail-user/detail-user.component';
import { ForgotPasswordComponent } from './pages/security/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: `login`, component: LoginComponent },
  { path: `register`, component: RegisterComponent },
  { path: `forgot-password`, component: ForgotPasswordComponent },
  {
    path: `bars`,
    children: [
      { path: ``, component: BarsComponent },
      { path: `add-bar`, component: AddBarComponent },
      { path: `detail/:id`, component: DetailBarComponent },
    ],
  },
  {
    path: `users`,
    children: [
      { path: ``, component: UsersComponent },
      { path: `detail/:id`, component: DetailUserComponent },
    ],
  },
  { path: ``, component: AccueilComponent },
  { path: `**`, component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
