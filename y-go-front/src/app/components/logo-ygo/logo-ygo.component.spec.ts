import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoYGoComponent } from './logo-ygo.component';

describe('LogoYGoComponent', () => {
  let component: LogoYGoComponent;
  let fixture: ComponentFixture<LogoYGoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoYGoComponent]
    });
    fixture = TestBed.createComponent(LogoYGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
