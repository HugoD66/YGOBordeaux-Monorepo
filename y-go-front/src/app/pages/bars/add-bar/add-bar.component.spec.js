"use strict";
Object.defineProperty(exports, `__esModule`, { value: true });
const testing_1 = require(`@angular/core/testing`);
const add_bar_component_1 = require(`./add-bar.component`);
describe(`AddBarComponent`, () => {
  let component;
  let fixture;
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [add_bar_component_1.AddBarComponent],
    });
    fixture = testing_1.TestBed.createComponent(
      add_bar_component_1.AddBarComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should create`, () => {
    expect(component).toBeTruthy();
  });
});
