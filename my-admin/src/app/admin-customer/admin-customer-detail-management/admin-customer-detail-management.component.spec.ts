import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerDetailManagementComponent } from './admin-customer-detail-management.component';

describe('AdminCustomerDetailManagementComponent', () => {
  let component: AdminCustomerDetailManagementComponent;
  let fixture: ComponentFixture<AdminCustomerDetailManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustomerDetailManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCustomerDetailManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
