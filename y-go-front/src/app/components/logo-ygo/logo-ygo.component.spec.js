"use strict"
Object.defineProperty(exports, `__esModule`, { value: true })
const testing_1 = require(`@angular/core/testing`)
const logo_ygo_component_1 = require(`./logo-ygo.component`)
describe(`LogoYGoComponent`, () => {
  let component
  let fixture
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [logo_ygo_component_1.LogoYGoComponent],
    })
    fixture = testing_1.TestBed.createComponent(logo_ygo_component_1.LogoYGoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it(`should create`, () => {
    expect(component).toBeTruthy()
  })
})
