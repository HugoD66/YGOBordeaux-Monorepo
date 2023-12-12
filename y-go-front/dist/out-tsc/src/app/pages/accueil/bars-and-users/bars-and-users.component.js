import { __decorate } from "tslib";
import { Component } from "@angular/core";
let BarsAndUsersComponent = class BarsAndUsersComponent {
    constructor(barService, userService) {
        this.barService = barService;
        this.userService = userService;
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
};
BarsAndUsersComponent = __decorate([
    Component({
        selector: `app-bars-and-users`,
        templateUrl: `./bars-and-users.component.html`,
        styleUrls: [`./bars-and-users.component.scss`],
    })
], BarsAndUsersComponent);
export { BarsAndUsersComponent };
//# sourceMappingURL=bars-and-users.component.js.map