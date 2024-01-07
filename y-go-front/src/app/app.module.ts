import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ButtonPanelHorizComponent } from './components/button-panel/button-panel-horiz/button-panel-horiz.component';
import { ButtonUnitHorizComponent } from './components/button-panel/button-panel-horiz/button-unit-horiz/button-unit-horiz.component';
import { ContactComponent } from './pages/accueil/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccueilNavComponent } from './pages/accueil/pres/accueil-nav/accueil-nav.component';
import { MapComponent } from './pages/accueil/map/map/map.component';
import { PageMapComponent } from './pages/accueil/map/page-map/page-map.component';
import { PresComponent } from './pages/accueil/pres/pres.component';
import { LogoYGoComponent } from './components/logo-ygo/logo-ygo.component';
import { MatInputModule } from '@angular/material/input';
import { ButtonUnitVerComponent } from './components/button-panel/button-panel-ver/button-unit-ver/button-unit-ver.component';
import { RegisterComponent } from './pages/security/register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { UserModule } from './pages/users/user.module';
import { BarModule } from './pages/bars/bar.module';
import { AddBarComponent } from './pages/bars/add-bar/add-bar.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StarRatingPipe } from './pipe/star-rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NotFoundComponent,
    MapComponent,
    PageMapComponent,
    PresComponent,
    RegisterComponent,
    AddBarComponent,
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
    ButtonUnitVerComponent,
    AccueilNavComponent,
    ContactComponent,
    LogoYGoComponent,
    MatInputModule,
    SnackbarComponent,
    UserModule,
    BarModule,
    MatSnackBarModule,
    StarRatingPipe,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports: [MapComponent],
})
export class AppModule {}
