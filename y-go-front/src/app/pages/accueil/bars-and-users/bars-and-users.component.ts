import {Component, OnInit} from "@angular/core"
import {BarModel} from "../../../models/bar.model";
import {BarService} from "../../../services/bar.service";
import {UserModel} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: `app-bars-and-users`,
  templateUrl: `./bars-and-users.component.html`,
  styleUrls: [`./bars-and-users.component.scss`],
})
export class BarsAndUsersComponent implements OnInit {
  barList: BarModel[] | undefined;
  userList: UserModel[] | undefined;
  constructor(
    private barService: BarService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
   // this.barService.getBarsList().subscribe((barList) => {
   //   this.barList = barList;
   //   //console.log(this.barList);
   // });
//
   // this.userService.getUsersList().subscribe((userList) => {
   //   this.userList = userList;
   //console.log(this.userList);
   // });
  }
}
