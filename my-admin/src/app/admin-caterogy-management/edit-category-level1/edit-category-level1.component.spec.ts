import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryLevel1Component } from './edit-category-level1.component';

describe('EditCategoryLevel1Component', () => {
  let component: EditCategoryLevel1Component;
  let fixture: ComponentFixture<EditCategoryLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoryLevel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCategoryLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
