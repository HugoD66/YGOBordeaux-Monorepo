import { ComponentFixture, TestBed } from "@angular/core/testing"

import { UnitBarComponent } from "./unit-bar.component"

describe(`UnitBarComponent`, () => {
  let component: UnitBarComponent
  let fixture: ComponentFixture<UnitBarComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitBarComponent],
    })
    fixture = TestBed.createComponent(UnitBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it(`should create`, () => {
    expect(component).toBeTruthy()
  })
})
