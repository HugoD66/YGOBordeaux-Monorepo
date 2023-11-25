import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBarComponent } from './detail-bar.component';

describe('DetailBarComponent', () => {
  let component: DetailBarComponent;
  let fixture: ComponentFixture<DetailBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBarComponent]
    });
    fixture = TestBed.createComponent(DetailBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
