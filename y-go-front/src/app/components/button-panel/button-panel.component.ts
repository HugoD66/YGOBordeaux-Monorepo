import { Component } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatIconModule } from "@angular/material/icon"
import { NgClass } from "@angular/common"
import { RouterLink } from "@angular/router"
import { ButtonUnitComponent } from "./button-unit/button-unit.component"

@Component({
  selector: `app-button-panel`,
  templateUrl: `./button-panel.component.html`,
  styleUrls: [`./button-panel.component.scss`],
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatIconModule, ButtonUnitComponent, NgClass, RouterLink],
})
export class ButtonPanelComponent {
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
