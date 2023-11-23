import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresComponent } from './pres.component';

describe('PresComponent', () => {
  let component: PresComponent;
  let fixture: ComponentFixture<PresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresComponent]
    });
    fixture = TestBed.createComponent(PresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
