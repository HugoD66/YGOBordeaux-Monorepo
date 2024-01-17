import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccCalendarComponent } from './acc-calendar.component';

describe('AccCalendarComponent', () => {
  let component: AccCalendarComponent;
  let fixture: ComponentFixture<AccCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccCalendarComponent],
    });
    fixture = TestBed.createComponent(AccCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
