import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from '../Interfaces/Medicine';
import { MedicineService } from '../Services/medicines.service';
import { EMPTY, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  [x: string]: any;
  category: string = '';
  medicineSubCategories: any;
  categories: any[] | undefined;
  medicines: any;
  medicineCategories: any;
  subcategories: any;
  medicine = new Medicines();
  countMedicine: number = 0;
  errMessage: string = '';
  imageUrlSub: any[] = [];
  constructor(
    public _service: MedicineService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    // activateRoute.paramMap.subscribe((param) => {
    //   let category = param.get('category');
    //   let sub_cat = param.get('sub_cat');
    //   if (category != null && sub_cat === null) {
    //     this.searchMedicinesCategory(category);
    //     this.displaycategory = false;
    //   }
    //   if (sub_cat != null && category != null) {
    //     this.searchMedicinesSubCategory(category, sub_cat);
    //   }
    // });
    activateRoute.paramMap
      .pipe(
        switchMap((param) => {
          let category = param.get('category');
          let sub_cat = param.get('sub_cat');
          if (category != null && sub_cat === null) {
            this.displaycategory = false;
            this.searchMedicinesCategory(category);
            return this._service.getMedicineCategory(category);
          }
          if (sub_cat != null && category != null) {
            this.searchMedicinesSubCategory(category, sub_cat);
            return this._service.getMedicineSubCategory(category, sub_cat);
          }
          return EMPTY;
        }),
        tap((data) => {
          this.medicineCategories = data;
          if (this.medicineCategories.length > 0) {
            this.category = this.medicineCategories[0].Category;
            this.countMedicine = this.medicineCategories.length;
          }
        })
      )
      .subscribe({
        error: (err) => {
          this.errMessage = err;
        },
      });


    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;

        this.imageUrlSub = this.medicines
          .filter(
            (medicine: { SubCategory: any }, index: any, self: any[]) =>
              index ===
              self.findIndex((m) => m.SubCategory === medicine.SubCategory)
          )
          .map((medicine: { Image: any }) => medicine.Image);

        // Lấy danh sách các Category duy nhất
        const categories = Array.from(
          new Set(data.map((x: { Category: any }) => x.Category))
        );

        // Lấy danh sách các SubCategory duy nhất theo từng Category
        this.categories = categories.map((category) => {
          return {
            Category: category,
            SubCategories: Array.from(
              new Set(
                data
                  .filter((x: { Category: any }) => x.Category === category)
                  .map((x: { SubCategory: any }) => x.SubCategory)
              )
            ),
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
        this.category = this.medicineCategories[0].Category;

        // Tạo một đối tượng để lưu trữ các hình ảnh cho mỗi danh mục con
        const imageUrlMap = new Map();
        for (const medicine of this.medicines) {
          const subcategory = medicine.SubCategory;
          if (!imageUrlMap.has(subcategory)) {
            // Nếu danh mục con chưa có hình ảnh thì lấy hình ảnh từ bất kỳ thuốc nào trong danh mục đó
            const imageUrl = this.medicines.find(
              (m: { SubCategory: any }) => m.SubCategory === subcategory
            ).Image;
            imageUrlMap.set(subcategory, imageUrl);
          }
        }

        this.subcategories = Array.from(
          new Set(
            this.medicineCategories.map(
              (x: { SubCategory: any }) => x.SubCategory
            )
          )
        ).map((subcat) => {
          return {
            SubCategory: subcat,
            imageUrl: imageUrlMap.get(subcat),
          };
        });

        this.countMedicine = this.medicineCategories.length;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  searchMedicinesSubCategory(category: string, sub_cat: string) {
    this._service.getMedicineSubCategory(category, sub_cat).subscribe({
      next: (data) => {
        this.medicineCategories = data;
        this.category = this.medicineCategories[0].Category;
        this.subcategories = Array.from(
          new Set(
            this.medicineCategories.map(
              (x: { SubCategory: any }) => x.SubCategory
            )
          )
        );
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit() {}

  displaycategory: boolean = false;

  id: any;
  tabChange(ids: any) {
    this.id = ids;
    this.displaycategory = true;
    this.countMedicine = 0;
    for (let medicine of this.medicineCategories) {
      if (medicine.SubCategory == this.id) {
        this.countMedicine++;
      }
    }
    console.log(this.id);
  }

  navigateToProductDetail(id: any) {
    this.router.navigate(['app-productdetail', id]).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }
}
