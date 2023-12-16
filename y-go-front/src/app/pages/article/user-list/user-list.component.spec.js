"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const user_list_component_1 = require("./user-list.component");
describe(`UserListComponent`, () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_list_component_1.UserListComponent],
        });
        fixture = testing_1.TestBed.createComponent(user_list_component_1.UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it(`should create`, () => {
        expect(component).toBeTruthy();
    });
});
