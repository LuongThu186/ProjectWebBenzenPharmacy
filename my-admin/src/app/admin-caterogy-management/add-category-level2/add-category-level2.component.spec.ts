import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryLevel2Component } from './add-category-level2.component';

describe('AddCategoryLevel2Component', () => {
  let component: AddCategoryLevel2Component;
  let fixture: ComponentFixture<AddCategoryLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryLevel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoryLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
