import {Component, Input, OnChanges, OnInit} from "@angular/core"
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {UserModel} from "../../../../models/user.model";
import {NgIf} from "@angular/common";
import {
  ButtonUnitHorizComponent
} from "../../../../components/button-panel/button-panel-horiz/button-unit-horiz/button-unit-horiz.component";

@Component({
  selector: `app-accueil-nav`,
  templateUrl: `./accueil-nav.component.html`,
  styleUrls: [`./accueil-nav.component.scss`],
  standalone: true,
  imports: [NgIf, MatListModule, MatDividerModule, MatButtonModule, RouterLinkActive, RouterLink, ButtonUnitHorizComponent],
})
export class AccueilNavComponent implements OnChanges{
  isAuthenticated = false;
  routerLinkProfile: string = '';
  @Input() user!: UserModel | undefined;

  constructor(
    private userService: UserService,
    private router: Router

  ) {}

  ngOnChanges(): void {
    if (this.user) {
      console.log(this.user);
      this.isAuthenticated = true;
      this.routerLinkProfile = `users/detail/${this.user.id}`;
    } else {
      this.isAuthenticated = false;
    }
  }

  onLogout(): void {
    this.userService.logout();
    this.isAuthenticated = false;
    this.router.navigateByUrl('/'); // Redirection après déconnexion
  }

  navigateToProfile(): void {
    if(this.user?.id) {
      this.routerLinkProfile = `users/detail/${this.user.id}`;
      this.router.navigate([this.routerLinkProfile]);
    }
  }
}
