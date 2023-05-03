import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../Services/medicines.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  errMessage: string = '';
  cartItems: any;
  medicines: any;
  categories: any[] | undefined;
  quantityItem: number = 0;
  selectedItems: any []=[];

  constructor(
    private route: ActivatedRoute,
    private _service: MedicineService,
    private router: Router
  ){
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

    this.selectedItems = this.route.snapshot.data['items'];
  }
  ngOnInit(): void {
    // const navigation = this.router.getCurrentNavigation();
    // if (navigation !== null) {
    //   const state = navigation.extras.state;
    //   if (state && state['items']) {
    //     this.selectedItems = state['items'];
    //   }      
    // } 
  }
}
