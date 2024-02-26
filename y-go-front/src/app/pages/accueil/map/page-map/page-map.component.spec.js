"use strict"
Object.defineProperty(exports, `__esModule`, { value: true })
const testing_1 = require(`@angular/core/testing`)
const page_map_component_1 = require(`./page-map.component`)
describe(`PageMapComponent`, () => {
  let component
  let fixture
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [page_map_component_1.PageMapComponent],
    })
    fixture = testing_1.TestBed.createComponent(page_map_component_1.PageMapComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it(`should create`, () => {
    expect(component).toBeTruthy()
  })
})
