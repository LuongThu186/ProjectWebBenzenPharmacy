import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryLevel2Component } from './edit-category-level2.component';

describe('EditCategoryLevel2Component', () => {
  let component: EditCategoryLevel2Component;
  let fixture: ComponentFixture<EditCategoryLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCategoryLevel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCategoryLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
