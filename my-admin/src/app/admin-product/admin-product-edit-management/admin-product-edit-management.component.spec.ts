import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductEditManagementComponent } from './admin-product-edit-management.component';

describe('AdminProductEditManagementComponent', () => {
  let component: AdminProductEditManagementComponent;
  let fixture: ComponentFixture<AdminProductEditManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductEditManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductEditManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
