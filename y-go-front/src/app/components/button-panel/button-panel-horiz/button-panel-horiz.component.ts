import { Component } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatIconModule } from "@angular/material/icon"
import { NgClass } from "@angular/common"
import { RouterLink } from "@angular/router"
import { ButtonUnitHorizComponent } from "./button-unit-horiz/button-unit-horiz.component"

@Component({
  selector: `app-button-panel-horiz`,
  templateUrl: `./button-panel-horiz.component.html`,
  styleUrls: [`./button-panel-horiz.component.scss`],
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, ButtonUnitHorizComponent, NgClass, RouterLink],
})
export class ButtonPanelHorizComponent {
  showFiller: boolean = false

  arrowLeftPicture: string = `./assets/icons/arrowLeft-withoutB.png`

  userPicture: string = `./assets/icons/user-withoutB.png`

  winePicture: string = `./assets/icons/drinkWine-withoutB.png`

  contactPicture: string = `./assets/icons/contact-withoutB.png`

  routerLinkLogin: string = `/login`
  routerLinkBars: string = `/bars`

  isDrawerOpen: boolean = false

  toogleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen
  }
}
