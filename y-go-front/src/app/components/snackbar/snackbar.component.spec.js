"use strict"
Object.defineProperty(exports, `__esModule`, { value: true })
const testing_1 = require(`@angular/core/testing`)
const snackbar_component_1 = require(`./snackbar.component`)
describe(`SnackbarComponent`, () => {
  let component
  let fixture
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [snackbar_component_1.SnackbarComponent],
    })
    fixture = testing_1.TestBed.createComponent(snackbar_component_1.SnackbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it(`should create`, () => {
    expect(component).toBeTruthy()
  })
})
