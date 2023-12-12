import { TestBed } from "@angular/core/testing";
import { BarsComponent } from "./bars.component";
describe(`BarComponent`, () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BarsComponent],
        });
        fixture = TestBed.createComponent(BarsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it(`should create`, () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bars.component.spec.js.map