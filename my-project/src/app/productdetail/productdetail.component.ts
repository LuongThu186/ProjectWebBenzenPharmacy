import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../Services/medicines.service';
import { Medicines } from '../Interfaces/Medicine';
import { AuthService } from '../Services/auth.service';

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
  currentUser: any;
  isLogin: boolean = false;

  declare window: Window & typeof globalThis;
  constructor(
    private activateRoute: ActivatedRoute,
    private _service: MedicineService,
    private router: Router,
    private _authService: AuthService
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

    this.currentUser = this._authService.getCurrentUser();
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


  // Thêm vào giỏ hàng
  addToCart(med: any): void {
    this.medicine.quantity = this.quantity;
    this._service.addToCart(med).subscribe(
      (response) => {
        console.log(response);
        // alert("Thêm sản phẩm vào giỏ hàng thành công");
        window.location.reload();
        // Thêm sản phẩm vào giỏ hàng thành công
      },
      (error) => {
        console.log(error);
        // Xảy ra lỗi khi thêm sản phẩm vào giỏ hàng
      }
    );
  }

  viewMedicineDetail(f: any){
    this.router.navigate(['app-productdetail', f._id]);
  }


  // onClickBuy(f: any){
  //   this.isDonePayment = true;
  // }

  addToCartToBuy(med: any): void {
    this.medicine.quantity = this.quantity;
    this._service.addToCart(med).subscribe(
      response => {
        console.log(response);
        // alert("Thêm sản phẩm vào giỏ hàng thành công");
        // this.router.navigate(['app-payment'])
        // Thêm sản phẩm vào giỏ hàng thành công
        if(this.currentUser != null){
          this.router.navigate(['app-payment']);
        } else {
          this.isLogin = true;
        }
      },
      error => {
        console.log(error);
        // Xảy ra lỗi khi thêm sản phẩm vào giỏ hàng
      }
    );
  }

  // onClickBuy(){
  //   if(this.currentUser != null){
  //     this.router.navigate(['app-payment']);
  //   } else {
  //     this.isLogin = true;
  //   }
  //   // } else {
  //   //   // this.router.navigate(['payment-kvl']);
  //   // }
  // }

  //popup
  @Input() title: string='';
  @Input() message: string='';
  @Output() confirmed = new EventEmitter<boolean>();

  onLogin() {
    this.confirmed.emit(true);
    this.router.navigate(['app-login']);
  }

  onBack() {
    this.confirmed.emit(false);
    this.isLogin = false;
  }
}
