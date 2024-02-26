"use strict"
Object.defineProperty(exports, `__esModule`, { value: true })
const testing_1 = require(`@angular/core/testing`)
const unit_user_component_1 = require(`./unit-user.component`)
describe(`UnitUserComponent`, () => {
  let component
  let fixture
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [unit_user_component_1.UnitUserComponent],
    })
    fixture = testing_1.TestBed.createComponent(unit_user_component_1.UnitUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it(`should create`, () => {
    expect(component).toBeTruthy()
  })
})
