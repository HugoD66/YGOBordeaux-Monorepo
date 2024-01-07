import { TestBed } from "@angular/core/testing";
import { SearchBarComponent } from "./search-bar.component";
describe("SearchBarComponent", () => {
  let component;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
//# sourceMappingURL=search-bar.component.spec.js.map
