"use strict"
Object.defineProperty(exports, `__esModule`, { value: true })
const testing_1 = require(`@angular/core/testing`)
const detail_user_component_1 = require(`./detail-user.component`)
describe(`DetailUserComponent`, () => {
  let component
  let fixture
  beforeEach(() => {
    testing_1.TestBed.configureTestingModule({
      declarations: [detail_user_component_1.DetailUserComponent],
    })
    fixture = testing_1.TestBed.createComponent(detail_user_component_1.DetailUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it(`should create`, () => {
    expect(component).toBeTruthy()
  })
})
