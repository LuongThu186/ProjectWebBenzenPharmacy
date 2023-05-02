import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductAddManagementComponent } from './admin-product-add-management.component';

describe('AdminProductAddManagementComponent', () => {
  let component: AdminProductAddManagementComponent;
  let fixture: ComponentFixture<AdminProductAddManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductAddManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductAddManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
