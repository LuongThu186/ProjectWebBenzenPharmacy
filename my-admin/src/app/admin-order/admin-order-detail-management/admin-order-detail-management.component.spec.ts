import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderDetailManagementComponent } from './admin-order-detail-management.component';

describe('AdminOrderDetailManagementComponent', () => {
  let component: AdminOrderDetailManagementComponent;
  let fixture: ComponentFixture<AdminOrderDetailManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderDetailManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrderDetailManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
