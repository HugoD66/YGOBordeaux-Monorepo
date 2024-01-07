"use strict";
Object.defineProperty(exports, `__esModule`, { value: true });
const testing_1 = require(`@angular/core/testing`);
const detail_bar_component_1 = require(`./detail-bar.component`);
describe(`DetailBarComponent`, () => {
  let component;
  let fixture;
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [detail_bar_component_1.DetailBarComponent],
    });
    fixture = testing_1.TestBed.createComponent(
      detail_bar_component_1.DetailBarComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should create`, () => {
    expect(component).toBeTruthy();
  });
});
