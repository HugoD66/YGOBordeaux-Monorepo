import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { BarService } from "../../services/bar.service";
import { CommonModule } from "@angular/common";
import { BarsComponent } from "./bars.component";
import { BarsAndUsersComponent } from "../accueil/bars-and-users/bars-and-users.component";
import { DetailBarComponent } from "./detail-bar/detail-bar.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { ButtonPanelHorizComponent } from "../../components/button-panel/button-panel-horiz/button-panel-horiz.component";
import { UnitBarComponent } from "./unit-bar/unit-bar.component";
import { LogoYGoComponent } from "../../components/logo-ygo/logo-ygo.component";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { ButtonPanelVerComponent } from "../../components/button-panel/button-panel-ver/button-panel-ver.component";
import { LoaderComponent } from "../../loader/loader";
let BarModule = class BarModule {};
BarModule = __decorate(
  [
    NgModule({
      declarations: [
        BarsComponent,
        BarsAndUsersComponent,
        DetailBarComponent,
        SearchBarComponent,
        LoaderComponent,
      ],
      providers: [BarService],
      imports: [
        CommonModule,
        ButtonPanelHorizComponent,
        UnitBarComponent,
        LogoYGoComponent,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        ButtonPanelVerComponent,
      ],
      exports: [BarsAndUsersComponent],
    }),
  ],
  BarModule,
);
export { BarModule };
//# sourceMappingURL=bar.module.js.map
