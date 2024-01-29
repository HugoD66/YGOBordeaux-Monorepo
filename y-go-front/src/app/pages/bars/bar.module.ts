import { NgModule } from "@angular/core"
import { BarService } from "../../services/bar.service"
import { CommonModule } from "@angular/common"
import { BarsComponent } from "./bars.component"
import { BarsAndUsersComponent } from "../accueil/bars-and-users/bars-and-users.component"
import { DetailBarComponent } from "./detail-bar/detail-bar.component"
import { SearchBarComponent } from "../../components/search-bar/search-bar.component"
import { ButtonPanelHorizComponent } from "../../components/button-panel/button-panel-horiz/button-panel-horiz.component"
import { UnitBarComponent } from "./unit-bar/unit-bar.component"
import { LogoYGoComponent } from "../../components/logo-ygo/logo-ygo.component"
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { LoaderComponent } from "../../loader/loader"
import { StarRatingPipe } from "../../pipe/star-rating.pipe"
import { PictureListService } from "../../services/picture-list.service"
import { GeocodingService } from "../../services/geocoding.service"
import { RateService } from "../../services/rate.service"
import { ParticularityTranslatePipe } from "../../pipe/particularity-translate.pipe"

@NgModule({
  declarations: [BarsComponent, BarsAndUsersComponent, SearchBarComponent, LoaderComponent],
  providers: [BarService, PictureListService, GeocodingService, RateService],
  imports: [
    CommonModule,
    ButtonPanelHorizComponent,
    UnitBarComponent,
    LogoYGoComponent,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    StarRatingPipe,
    ReactiveFormsModule,
    DetailBarComponent,
  ],
  exports: [BarsAndUsersComponent],
})
export class BarModule {}
