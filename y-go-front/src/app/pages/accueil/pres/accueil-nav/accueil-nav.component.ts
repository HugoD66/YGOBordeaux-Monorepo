import {Component, OnInit} from "@angular/core"
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
export class AccueilNavComponent implements OnInit{
  isAuthenticated = false;
  result: UserModel | undefined;
  routerLinkProfile: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void{
    try {
      this.userService.getUser().subscribe(data => {
        this.result = data;
        if (this.result) {
          this.isAuthenticated = true;
          console.log(this.result);
        }
      });
    } catch (error) {
    }
  }

  onLogout(): void {
    this.userService.logout();
    this.isAuthenticated = false;

  }
  async fetchUserAndNavigate() {
    const data = await this.userService.getUser().toPromise();
    this.result = data;
    if(this.result?.id) {
      this.isAuthenticated = true;
      this.routerLinkProfile = `users/detail/${this.result?.id}`;
      this.router.navigate([this.routerLinkProfile]);
    }
  }
}
