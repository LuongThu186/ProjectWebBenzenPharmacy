import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryLevel1Component } from './add-category-level1.component';

describe('AddCategoryLevel1Component', () => {
  let component: AddCategoryLevel1Component;
  let fixture: ComponentFixture<AddCategoryLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryLevel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoryLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
