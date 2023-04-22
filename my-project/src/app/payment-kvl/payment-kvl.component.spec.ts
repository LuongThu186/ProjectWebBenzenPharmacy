import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentKVLComponent } from './payment-kvl.component';

describe('PaymentKVLComponent', () => {
  let component: PaymentKVLComponent;
  let fixture: ComponentFixture<PaymentKVLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentKVLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentKVLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
