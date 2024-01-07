"use strict";
Object.defineProperty(exports, `__esModule`, { value: true });
const testing_1 = require(`@angular/core/testing`);
const bars_component_1 = require(`./bars.component`);
describe(`BarComponent`, () => {
  let component;
  let fixture;
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [bars_component_1.BarsComponent],
    });
    fixture = testing_1.TestBed.createComponent(bars_component_1.BarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should create`, () => {
    expect(component).toBeTruthy();
  });
});
