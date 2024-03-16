"use strict";
Object.defineProperty(exports, `__esModule`, { value: true });
const testing_1 = require(`@angular/core/testing`);
const unit_bar_component_1 = require(`./unit-bar.component`);
describe(`UnitBarComponent`, () => {
  let component;
  let fixture;
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [unit_bar_component_1.UnitBarComponent],
    });
    fixture = testing_1.TestBed.createComponent(
      unit_bar_component_1.UnitBarComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should create`, () => {
    expect(component).toBeTruthy();
  });
});
