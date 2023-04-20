import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustonerManagementComponent } from './admin-custoner-management.component';

describe('AdminCustonerManagementComponent', () => {
  let component: AdminCustonerManagementComponent;
  let fixture: ComponentFixture<AdminCustonerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustonerManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCustonerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
