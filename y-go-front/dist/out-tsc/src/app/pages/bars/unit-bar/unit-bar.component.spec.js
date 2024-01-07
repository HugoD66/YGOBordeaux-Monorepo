import { TestBed } from "@angular/core/testing";
import { UnitBarComponent } from "./unit-bar.component";
describe(`UnitBarComponent`, () => {
  let component;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitBarComponent],
    });
    fixture = TestBed.createComponent(UnitBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should create`, () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=unit-bar.component.spec.js.map
