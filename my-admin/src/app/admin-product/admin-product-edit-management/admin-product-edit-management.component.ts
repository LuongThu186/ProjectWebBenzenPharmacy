import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from 'src/app/Interfaces/Medicine';
import { AdminMedicineService } from 'src/app/Services/admin-medicine.service';

@Component({
  selector: 'app-admin-product-edit-management',
  templateUrl: './admin-product-edit-management.component.html',
  styleUrls: ['./admin-product-edit-management.component.css']
})
export class AdminProductEditManagementComponent {
  medicines: any;
  categories: any[] = [];
  subcategories: any;
  medicine=new Medicines();
  errMessage: string = '';
  constructor(public _service: AdminMedicineService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchMedicine(id);
      }
    });

    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;
        this.subcategories = Array.from(
          new Set(this.medicines.map((x: { SubCategory: any }) => x.SubCategory))
        );

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
            )};
        });
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  public setMedicine(f: Medicines) {
    this.medicine = f;
  }
  searchMedicine(medicineId: string) {
    this._service.getMedicine(medicineId).subscribe({
      next: (data) => {
        this.medicine = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putMedicine(){
    this.medicine.Create_date= `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
    this._service.putMedicine(this.medicine).subscribe({
      next:(data)=>{this.medicine=data},
      error:(err)=>{this.errMessage=err}
    }),
    alert("Update successfully!")
    this.goBack()
  }

  goBack() {
    this.router.navigate(['admin-product-management']);
  }

  onFileSelected(event: any, medicine: Medicines) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      medicine.Image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}
