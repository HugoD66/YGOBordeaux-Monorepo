import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';

@Component({
  selector: `app-users`,
  templateUrl: `./users.component.html`,
  styleUrls: [`./users.component.scss`],
})
export class UsersComponent implements OnInit {
  userList: UserModel[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getUsersList()
      .subscribe((userList) => (this.userList = userList));
  }
}
