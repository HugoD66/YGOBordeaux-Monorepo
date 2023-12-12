import { TestBed } from '@angular/core/testing';
import { UnitUserComponent } from './unit-user.component';
describe('UnitUserComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [UnitUserComponent]
        });
        fixture = TestBed.createComponent(UnitUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=unit-user.component.spec.js.map