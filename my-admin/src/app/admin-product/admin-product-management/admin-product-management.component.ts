import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminMedicineService } from 'src/app/Services/admin-medicine.service';
import { PaginatePipe } from 'ngx-pagination';

@Component({
  selector: 'app-admin-product-management',
  templateUrl: './admin-product-management.component.html',
  styleUrls: ['./admin-product-management.component.css'],
  providers: [PaginatePipe]
})
export class AdminProductManagementComponent {
  [x: string]: any;
  medicines: any;
  errMessage: string = '';
  page: number = 1;
  constructor(public _service: AdminMedicineService, private router: Router, private activateRoute: ActivatedRoute) {
    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  addMedicine() {
    this.router.navigate(['admin-product-add-management']);
  }

  viewDetailMedicine(f: any) {
    this.router.navigate(['admin-product-detail-management', f._id]);
  }

  updateMedicine(f: any) {
    this.router.navigate(['admin-product-detail-management/edit', f._id]);
  }

  deleteMedicine(_id: any) {
    if (window.confirm('Are you sure you want to delete this medicine?')) {
      this._service.deleteMedicine(_id).subscribe({
        next:(data)=>{this.medicines=data},
        error:(err)=>{this.errMessage=err}
      })
    };
  }
}
