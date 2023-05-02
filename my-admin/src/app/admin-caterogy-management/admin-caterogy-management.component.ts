import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from '../Interfaces/Medicine';
import { AdminMedicineService } from '../Services/admin-medicine.service';

@Component({
  selector: 'app-admin-caterogy-management',
  templateUrl: './admin-caterogy-management.component.html',
  styleUrls: ['./admin-caterogy-management.component.css']
})

export class AdminCaterogyManagementComponent {
  categories: any[] = [];
  subcategories: any;
  [x: string]: any;
  medicines: any;
  errMessage: string = '';
  imageUrlSub: any[] = [];
  imageUrlCat: any[] = [];
  constructor(public _service: AdminMedicineService, private router: Router, private activateRoute: ActivatedRoute) {
    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;
        this.subcategories = Array.from(
          new Set(this.medicines.map((x: { SubCategory: any }) => x.SubCategory))
        );

        this.imageUrlCat = this.medicines.filter((medicine: { Category: any; }, index: any, self: any[]) =>
        index === self.findIndex((m) => m.Category === medicine.Category)).map((medicine: { Image: any; }) => medicine.Image)
        this.imageUrlSub = this.medicines.filter((medicine: { SubCategory: any; }, index: any, self: any[]) =>
        index === self.findIndex((m) => m.SubCategory === medicine.SubCategory)).map((medicine: { Image: any; }) => medicine.Image)

        // Lấy danh sách các Category duy nhất
        const categories = Array.from(
          new Set(data.map((x: { Category: any }) => x.Category))
        );

        // Lấy danh sách các SubCategory duy nhất theo từng Category
        this.categories = categories.map((category, index) => {
          return {
            Category: category,
            imageCat: this.imageUrlCat[index],
            SubCategories: Array.from(
              new Set(
                data
                  .filter((x: { Category: any }) => x.Category === category)
                  .map((x: { SubCategory: any }) => x.SubCategory)
              )
            ).map((subcat, index) => {
              return {
                SubCategory: subcat,
                medicineCount: this.medicines.filter((x: { SubCategory: any }) => x.SubCategory === subcat).length,
                imageUrl: this.imageUrlSub[index],
              }
            }),
          };
        });
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  changeCat: string = '';
  tabChange(tab:any){
    this.changeCat= tab;
    console.log(this.changeCat)
  }

  addCatLevel1(){
    this.router.navigate(['add-category-level1']);
  }
  addCatLevel2(){
    this.router.navigate(['add-category-level2']);
  }

  editCatLevel1(category: any) {
    this.router.navigate(['edit-category-level1', category.Category]);
  }
  editCatLevel2(subcategory: any) {
    this.router.navigate(['edit-category-level2', subcategory.SubCategory]);
  }

  deleteMedicine() {
    window.confirm('Are you sure you want to delete this medicine?');
  }

}
