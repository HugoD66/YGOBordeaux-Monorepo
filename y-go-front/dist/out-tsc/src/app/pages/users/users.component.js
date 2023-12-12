import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UsersComponent = class UsersComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getUsersList().subscribe(userList => this.userList = userList);
        console.log(this.userList);
    }
};
UsersComponent = __decorate([
    Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.scss']
    })
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=users.component.js.map