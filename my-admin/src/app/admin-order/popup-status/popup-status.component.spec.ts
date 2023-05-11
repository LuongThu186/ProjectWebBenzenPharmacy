import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupStatusComponent } from './popup-status.component';

describe('PopupStatusComponent', () => {
  let component: PopupStatusComponent;
  let fixture: ComponentFixture<PopupStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
