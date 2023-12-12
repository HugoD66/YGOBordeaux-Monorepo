import { TestBed } from '@angular/core/testing';
import { AddBarComponent } from './add-bar.component';
describe('AddBarComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AddBarComponent]
        });
        fixture = TestBed.createComponent(AddBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-bar.component.spec.js.map