import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicines } from 'src/app/Interfaces/Medicine';
import { AdminMedicineService } from 'src/app/Services/admin-medicine.service';

@Component({
  selector: 'app-admin-product-add-management',
  templateUrl: './admin-product-add-management.component.html',
  styleUrls: ['./admin-product-add-management.component.css']
})
export class AdminProductAddManagementComponent {
  medicine = new Medicines();
  errMessage: string = '';
  constructor(public _service: AdminMedicineService, private router: Router, private activateRoute: ActivatedRoute) {}
  public setFashion(f: Medicines) {
    this.medicine = f;
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
  postMedicine() {
    this.medicine.Create_date= `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`;
    this._service.postMedicine(this.medicine).subscribe({
      next: (data) => {
        this.medicine = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    alert('Add medicine successfully!');
    this.goBack();
  }

  goBack() {
    this.router.navigate(['admin-product-management']);
  }
}
