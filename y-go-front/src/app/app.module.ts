import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import {MatIconModule} from "@angular/material/icon";
import {ButtonPanelComponent} from "./components/button-panel/button-panel.component";
import {CommonModule} from "@angular/common";
import {ButtonUnitComponent} from "./components/button-panel/button-unit/button-unit.component";
import { ArticleComponent } from './pages/accueil/article/article.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './pages/accueil/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { BarComponent } from './pages/bar/bar.component';
import { UnitBarComponent } from './pages/bar/unit-bar/unit-bar.component';
import { UserListComponent } from './pages/article/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, AccueilComponent, ArticleComponent, CarouselComponent, ContactComponent, NotFoundComponent, LoginComponent, BarComponent, UnitBarComponent, UserListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    ButtonPanelComponent,
    ButtonUnitComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
