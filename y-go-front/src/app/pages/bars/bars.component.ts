import {Component, effect, OnInit, signal, WritableSignal} from '@angular/core';
import { BarService } from '../../services/bar.service';
import { BarModel } from '../../models/bar.model';
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: `app-bars`,
  templateUrl: `./bars.component.html`,
  styleUrls: [`./bars.component.scss`],
})
export class BarsComponent implements OnInit {
  public isLogged: WritableSignal<boolean> = signal(false);
  public user: WritableSignal<UserModel | undefined> = signal(undefined);
  barList: BarModel[] | undefined;
  filteredBarList: BarModel[] = [];


  constructor(private barService: BarService,
              private userService: UserService,
              private router: Router) {
    this.initializeUser();

  }

  ngOnInit() {
    this.barService.getBarsList().subscribe((barList) => {
      this.barList = barList;
      this.filteredBarList = barList;
    });
  }

  onSearch(value: string) {
    if (this.barList) {
      if (value) {
        this.filteredBarList = this.barList.filter(
          (bar) => bar?.name?.toLowerCase().includes(value.toLowerCase()),
        );
      } else {
        this.filteredBarList = this.barList;
      }
    }
  }

  async initializeUser() {
    this.userService.getUser().subscribe({
      next: (user) => {
        this.user.set(user);
        this.isLogged.set(true);
      },
      error: (error) => {
        this.isLogged.set(false);
      }
    });
  }

  onClick() {
    this.router.navigate([`/bars/add-bar`])
  }
}
