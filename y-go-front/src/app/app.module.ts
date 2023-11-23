import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { CommonModule } from "@angular/common"
import {
  CarouselCaptionComponent,
  CarouselComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
} from "@coreui/angular"
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AccueilComponent } from "./pages/accueil/accueil.component"
import { ButtonPanelComponent } from "./components/button-panel/button-panel.component"
import { ButtonUnitComponent } from "./components/button-panel/button-unit/button-unit.component"
import { ContactComponent } from "./pages/accueil/contact/contact.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"
import { BarsComponent } from "./pages/bars/bars.component"
import { UnitBarComponent } from "./pages/bars/unit-bar/unit-bar.component"
import { UserListComponent } from "./pages/article/user-list/user-list.component"
import { AccueilNavComponent } from "./pages/accueil/accueil-nav/accueil-nav.component"
import { BarsAndUsersComponent } from "./pages/accueil/bars-and-users/bars-and-users.component"
import { MapComponent } from "./pages/accueil/map/map/map.component";
import { PageMapComponent } from './pages/accueil/map/page-map/page-map.component';
import { PresComponent } from './pages/accueil/pres/pres.component'

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NotFoundComponent,
    BarsComponent,
    UnitBarComponent,
    UserListComponent,
    BarsAndUsersComponent,
    MapComponent,
    PageMapComponent,
    PresComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ButtonPanelComponent,
    ButtonUnitComponent,
    AccueilNavComponent,
    CarouselComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
