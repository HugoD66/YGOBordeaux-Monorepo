import { TestBed } from '@angular/core/testing';
import { SnackbarComponent } from './snackbar.component';
describe('SnackbarComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SnackbarComponent]
        });
        fixture = TestBed.createComponent(SnackbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=snackbar.component.spec.js.map