"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const search_bar_component_1 = require("./search-bar.component");
describe('SearchBarComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [search_bar_component_1.SearchBarComponent]
        });
        fixture = testing_1.TestBed.createComponent(search_bar_component_1.SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
