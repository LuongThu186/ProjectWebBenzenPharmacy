import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUncompleteOrderManagementComponent } from './admin-uncomplete-order-management.component';

describe('AdminUncompleteOrderManagementComponent', () => {
  let component: AdminUncompleteOrderManagementComponent;
  let fixture: ComponentFixture<AdminUncompleteOrderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUncompleteOrderManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUncompleteOrderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
