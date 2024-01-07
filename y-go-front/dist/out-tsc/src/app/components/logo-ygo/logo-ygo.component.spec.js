import { TestBed } from "@angular/core/testing";
import { LogoYGoComponent } from "./logo-ygo.component";
describe("LogoYGoComponent", () => {
  let component;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoYGoComponent],
    });
    fixture = TestBed.createComponent(LogoYGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=logo-ygo.component.spec.js.map
