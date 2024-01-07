import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitUserComponent } from './unit-user.component';

describe(`UnitUserComponent`, () => {
  let component: UnitUserComponent;
  let fixture: ComponentFixture<UnitUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitUserComponent],
    });
    fixture = TestBed.createComponent(UnitUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create`, () => {
    expect(component).toBeTruthy();
  });
});
