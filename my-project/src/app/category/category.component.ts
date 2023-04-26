import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from '../Interfaces/Medicine';
import { MedicineService } from '../Services/medicines.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  [x: string]: any;
  category: string = '';
  subcategories: any;
  categories:any[] | undefined;
  medicines: any;
  medicineCategories: any;
  medicine= new Medicines();
  errMessage: string = '';
  constructor(public _service: MedicineService, private router: Router, private activateRoute: ActivatedRoute){
    activateRoute.paramMap.subscribe((param) => {
      let category = param.get('category');
      if (category != null) {
        this.searchMedicinesCategory(category);
      }
    });
    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;

        // Lấy danh sách các Category duy nhất
        const categories = Array.from(new Set(data.map((x: { Category: any; }) => x.Category)));

        // Lấy danh sách các SubCategory duy nhất theo từng Category
        this.categories = categories.map(category => {
          return {
            Category: category,
            SubCategories: Array.from(new Set(data.filter((x: { Category: any; }) => x.Category === category).map((x: {
              SubCategory: any;
}) => x.SubCategory)))
          };
        });
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  searchMedicinesCategory(category: string) {
    this._service.getMedicineCategory(category).subscribe({
      next: (data) => {
        this.medicineCategories = data;
        this.subcategories = Array.from(new Set(this.medicineCategories.map((x: { SubCategory: any; }) => x.SubCategory)));
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(){}

  viewMedicineDetail(f: any){
    this.router.navigate(['app-productdetail', f._id]);
  }

  id: any = "giamdauhasotkhangsinh";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }

}
