import { NgModule } from "@angular/core"
import { RouterModule, type Routes } from "@angular/router"
import { AccueilComponent } from "./pages/accueil/accueil.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"
import { LoginComponent } from "./pages/login/login.component"
import { BarsComponent } from "./pages/bars/bars.component"
import {DetailBarComponent} from "./pages/bars/detail-bar/detail-bar.component";

const routes: Routes = [
  { path: `login`, component: LoginComponent },
  { path: `bars`, component: BarsComponent },
  { path: `bars/:id`, component: DetailBarComponent },
  { path: ``, component: AccueilComponent },
  { path: `**`, component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
