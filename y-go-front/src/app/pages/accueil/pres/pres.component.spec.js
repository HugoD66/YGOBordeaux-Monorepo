"use strict"
Object.defineProperty(exports, `__esModule`, { value: true })
const testing_1 = require(`@angular/core/testing`)
const pres_component_1 = require(`./pres.component`)
describe(`PresComponent`, () => {
  let component
  let fixture
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [pres_component_1.PresComponent],
    })
    fixture = testing_1.TestBed.createComponent(pres_component_1.PresComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it(`should create`, () => {
    expect(component).toBeTruthy()
  })
})
