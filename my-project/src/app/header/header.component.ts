import { Component } from '@angular/core';
import { Medicines } from '../Interfaces/Medicine';
import { MedicineService } from '../Services/medicines.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  [x: string]: any;
  category: string = '';
  categories: any[] | undefined;
  medicines: any;
  medicine = new Medicines();
  errMessage: string = '';
  constructor(
    public _service: MedicineService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;

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

  viewCategory(c:any){
    this.router.navigate(['app-category', c.Category])
  }
  viewSubCategory(sub_cat:any){
    this.router.navigate(['app-category', sub_cat])
  }
}
