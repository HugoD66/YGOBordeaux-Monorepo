"use strict";
Object.defineProperty(exports, `__esModule`, { value: true });
const testing_1 = require(`@angular/core/testing`);
const not_found_component_1 = require(`./not-found.component`);
describe(`NotFoundComponent`, () => {
  let component;
  let fixture;
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [not_found_component_1.NotFoundComponent],
    });
    fixture = testing_1.TestBed.createComponent(
      not_found_component_1.NotFoundComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should create`, () => {
    expect(component).toBeTruthy();
  });
});
