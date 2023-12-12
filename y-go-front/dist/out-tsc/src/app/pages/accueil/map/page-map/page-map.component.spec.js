import { TestBed } from '@angular/core/testing';
import { PageMapComponent } from './page-map.component';
describe('PageMapComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PageMapComponent]
        });
        fixture = TestBed.createComponent(PageMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-map.component.spec.js.map