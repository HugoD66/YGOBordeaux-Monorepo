import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../models/user.model";

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
    user!: UserModel;
    constructor(
      private userService: UserService,
    ) { }

    ngOnInit(): void {
      this.userService.getUser().subscribe((user: UserModel) => {
        this.user = user;
      });
    }


}
