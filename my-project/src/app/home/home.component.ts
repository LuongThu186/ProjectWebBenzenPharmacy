import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Medicines } from '../Interfaces/Medicine';
import { MedicineService } from '../Services/medicines.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  [x: string]: any;
  category: string = '';
  categories:any[] | undefined
  medicines: any;
  medicineCategory: any;
  medicine= new Medicines();
  errMessage: string = '';
  constructor(public _service: MedicineService, private router: Router, private activateRoute: ActivatedRoute) {
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
        this.medicineCategory = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(){

  }

  subCategory: string = '';
  changeSubCategory(subCategory: any) {
    this.subCategory = subCategory;
  }

  viewMedicineDetail(f: any){
    this.router.navigate(['app-productdetail', f._id]);
  }



  th: any = "tieuhoa";
  tabTieuhoa(ths:any){
    this.th= ths;
    console.log(this.th)
  }

}
