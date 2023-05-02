import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminMedicineService } from 'src/app/Services/admin-medicine.service';

@Component({
  selector: 'app-admin-product-detail-management',
  templateUrl: './admin-product-detail-management.component.html',
  styleUrls: ['./admin-product-detail-management.component.css']
})
export class AdminProductDetailManagementComponent {
  medicine: any;
  errMessage: string = '';
  constructor(public _service: AdminMedicineService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchMedicine(id);
      }
    });
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
  goBack() {
    this.router.navigate(['admin-product-management']);
  }
}
