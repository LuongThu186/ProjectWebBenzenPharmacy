import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../Services/medicines.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  quantity: number = 1;
  medicine: any;
  errMessage: string = '';
  medicines: any;
  categories: any[] | undefined;
  constructor(
    private activateRoute: ActivatedRoute,
    private _service: MedicineService,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let medicineId = param.get('id');
      if (medicineId != null) {
        this.searchMedicine(medicineId);
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

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Xem thêm chi tiết sản phẩm
  expandDiv: boolean = false;
  showMore() {
    this.expandDiv = true;
  }

  HiddenMore(){
    this.expandDiv = false;
  }

}
