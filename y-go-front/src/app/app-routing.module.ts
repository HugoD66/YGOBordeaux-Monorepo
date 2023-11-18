import { NgModule } from "@angular/core"
import { RouterModule, type Routes } from "@angular/router"
import { AccueilComponent } from "./pages/accueil/accueil.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"
import { LoginComponent } from "./pages/login/login.component"
import { UnitBarComponent } from "./pages/bar/unit-bar/unit-bar.component"
import { BarComponent } from "./pages/bar/bar.component"

const routes: Routes = [
  { path: `login`, component: LoginComponent },
  { path: `bar`, component: BarComponent },
  { path: `bar/:id`, component: UnitBarComponent },
  { path: ``, component: AccueilComponent },
  { path: `**`, component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
