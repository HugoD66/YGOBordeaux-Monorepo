import {Component, OnInit} from "@angular/core"
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {UserService} from "../../../../services/user.service";
import {UserModel} from "../../../../models/user.model";
import {NgIf} from "@angular/common";

@Component({
  selector: `app-accueil-nav`,
  templateUrl: `./accueil-nav.component.html`,
  styleUrls: [`./accueil-nav.component.scss`],
  standalone: true,
  imports: [NgIf, MatListModule, MatDividerModule, MatButtonModule, RouterLinkActive, RouterLink],
})
export class AccueilNavComponent implements OnInit{
  isAuthenticated = false;
  result: UserModel | null = null;

  constructor(
    private userService: UserService,
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
      console.error("Error fetching user data:", error);
    }
  }

  onLogout(): void {
    this.userService.logout();
    this.isAuthenticated = false;
  }
}
