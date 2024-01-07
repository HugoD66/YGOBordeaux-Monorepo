import { TestBed } from "@angular/core/testing";
import { DetailUserComponent } from "./detail-user.component";
describe("DetailUserComponent", () => {
  let component;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailUserComponent],
    });
    fixture = TestBed.createComponent(DetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=detail-user.component.spec.js.map
