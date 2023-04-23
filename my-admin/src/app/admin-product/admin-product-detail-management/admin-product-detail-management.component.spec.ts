import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductDetailManagementComponent } from './admin-product-detail-management.component';

describe('AdminProductDetailManagementComponent', () => {
  let component: AdminProductDetailManagementComponent;
  let fixture: ComponentFixture<AdminProductDetailManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductDetailManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductDetailManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
