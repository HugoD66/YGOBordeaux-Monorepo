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
import { ButtonPanelHorizComponent } from "./components/button-panel/button-panel-horiz/button-panel-horiz.component"
import { ButtonUnitHorizComponent } from "./components/button-panel/button-panel-horiz/button-unit-horiz/button-unit-horiz.component"
import { ContactComponent } from "./pages/accueil/contact/contact.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"
import { BarsComponent } from "./pages/bars/bars.component"
import { UnitBarComponent } from "./pages/bars/unit-bar/unit-bar.component"
import { UserListComponent } from "./pages/article/user-list/user-list.component"
import { AccueilNavComponent } from "./pages/accueil/accueil-nav/accueil-nav.component"
import { BarsAndUsersComponent } from "./pages/accueil/bars-and-users/bars-and-users.component"
import { MapComponent } from "./pages/accueil/map/map/map.component";
import { PageMapComponent } from './pages/accueil/map/page-map/page-map.component';
import { PresComponent } from './pages/accueil/pres/pres.component';
import { LogoYGoComponent } from './components/logo-ygo/logo-ygo.component'
import {MatInputModule} from "@angular/material/input";
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DetailBarComponent } from './pages/bars/detail-bar/detail-bar.component';
import { ButtonPanelVerComponent } from './components/button-panel/button-panel-ver/button-panel-ver.component';
import { ButtonUnitVerComponent } from './components/button-panel/button-panel-ver/button-unit-ver/button-unit-ver.component';
import { RegisterComponent } from './pages/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NotFoundComponent,
    BarsComponent,
    UserListComponent,
    BarsAndUsersComponent,
    MapComponent,
    PageMapComponent,
    PresComponent,
    SearchBarComponent,
    DetailBarComponent,
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ButtonPanelHorizComponent,
    ButtonUnitHorizComponent,
    ButtonPanelVerComponent,
    ButtonUnitVerComponent,
    AccueilNavComponent,
    CarouselComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    ContactComponent,
    LogoYGoComponent,
    MatInputModule,
    UnitBarComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
