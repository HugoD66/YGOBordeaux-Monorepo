import { Component, Input, OnChanges, OnInit } from "@angular/core"
import { MatDividerModule } from "@angular/material/divider"
import { MatListModule } from "@angular/material/list"
import { MatButtonModule } from "@angular/material/button"
import { Router, RouterLink, RouterLinkActive } from "@angular/router"
import { UserService } from "../../../../services/user.service"
import { UserModel } from "../../../../models/user.model"

import { ButtonUnitHorizComponent } from "../../../../components/button-panel/button-panel-horiz/button-unit-horiz/button-unit-horiz.component"
import { Observable, Observer } from "rxjs"
import { MatTabsModule } from "@angular/material/tabs"
import { AsyncPipe } from "@angular/common"

export interface ExampleTab {
  label: string
  content: string
}

@Component({
  selector: `app-accueil-nav`,
  templateUrl: `./accueil-nav.component.html`,
  styleUrls: [`./accueil-nav.component.scss`],
  standalone: true,
  imports: [
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    RouterLinkActive,
    RouterLink,
    ButtonUnitHorizComponent,
    MatTabsModule,
    AsyncPipe,
  ],
})
export class AccueilNavComponent implements OnChanges {
  isAuthenticated = false
  routerLinkProfile: string = ``
  @Input() user!: UserModel | undefined
  asyncTabs: Observable<ExampleTab[]>

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: `First`, content: `Content 1` },
          { label: `Second`, content: `Content 2` },
          { label: `Third`, content: `Content 3` },
        ])
      }, 1000)
    })
  }

  ngOnChanges(): void {
    if (this.user) {
      console.log(this.user)
      this.isAuthenticated = true
      this.routerLinkProfile = `users/detail/${this.user.id}`
    } else {
      this.isAuthenticated = false
    }
  }

  onLogout(): void {
    this.userService.logout()
    this.isAuthenticated = false
    this.router.navigateByUrl(`/`)
  }

  navigateToProfile(): void {
    if (this.user?.id) {
      this.routerLinkProfile = `users/detail/${this.user.id}`
      this.router.navigate([this.routerLinkProfile])
    }
  }
}
