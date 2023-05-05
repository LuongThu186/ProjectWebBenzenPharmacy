import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../Services/medicines.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {
  cartItems: any;
  errMessage: string = '';
  medicines: any;
  categories: any[] | undefined;
  display:boolean = true;
  quantityItem: number = 0;
  totalPrice: number = 0;
  prePrice: number = 0;
  total:string = '0';
  preprice:string = '0';
  selectedItems: any[] = [];
  constructor(
    private activateRoute: ActivatedRoute,
    private _service: MedicineService,
    private router: Router
  ) {
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

    this._service.getCart().subscribe({
      next: (data) => {
        this.cartItems = data;
        this.quantityItem = this.cartItems.length;
        if(this.cartItems.length > 0){
          this.display = false;
        }
        // for(let item of this.cartItems){
        //   const price:number = parseFloat((item.Price.replace(" đ/Hộp", "")).replace(".", ""))
        //   this.totalPrice += price * item.quantity;
        // }
        // this.prePrice = this.totalPrice;
        // this.total = this.totalPrice.toLocaleString("vi-VN", {minimumFractionDigits: 0,});
        // this.preprice = this.prePrice.toLocaleString("vi-VN", {minimumFractionDigits: 0,});
      }
    });
  }
  viewMedicineDetail(medicineId: string) {
    this.router.navigate(['app-productdetail', medicineId]);
  }

  calculateTotalPrice(item: any) {
    const price: number = parseFloat((item.Price.replace(" đ/Hộp", "")).replace(".", ""));
    if (this.selectedItems.includes(item)) {
      // sản phẩm đã được chọn, bỏ chọn nó
      this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem !== item);
      this.totalPrice -= price * item.quantity;
    } else {
      // sản phẩm chưa được chọn, chọn nó
      this.selectedItems.push(item);
      this.totalPrice += price * item.quantity;
    }
    // cập nhật giá trị hiển thị trên giao diện
    this.prePrice = this.totalPrice;
    this.total = this.totalPrice.toLocaleString("vi-VN", { minimumFractionDigits: 0 });
    this.preprice = this.prePrice.toLocaleString("vi-VN", { minimumFractionDigits: 0 });
  }

  increase(medicine: any) {
    console.log("increase called");
    medicine.quantity++;
    this._service.updateQuantityCart(medicine).subscribe(
      response => {
        console.log(response);
        // Cập nhật số lượng sản phẩm thành công
      }
    );
  }

  decrease(medicine: any) {
    console.log("decrease called");
    if (medicine.quantity > 1) {
      medicine.quantity--;
      this._service.updateQuantityCart(medicine).subscribe(
        response => {
          console.log(response);
          // Cập nhật số lượng sản phẩm thành công
        }
      );
    }
  }

  updateQuantity(med: any) {
    // med.quantity = med.ngModel;
    console.log(med);
    this._service.updateQuantityCart(med).subscribe(
      response => {
        console.log(response);
        // Cập nhật số lượng sản phẩm thành công
      }
    );
  }

  addToCart(med: any): void {
    med.quantity = 1;
    this._service.addToCart(med).subscribe(
      response => {
        console.log(response);
        alert("Thêm sản phẩm vào giỏ hàng thành công");
        this.router.navigate(['app-shoppingcart']);
        // Thêm sản phẩm vào giỏ hàng thành công
      },
      error => {
        console.log(error);
        // Xảy ra lỗi khi thêm sản phẩm vào giỏ hàng
      }
    );
  }

  removeFromCart(medId: any) {
    if(window.confirm("Bạn chắc chắn muốn xóa khỏi giỏ hàng?")){
      this._service.removeFromCart(medId).subscribe(
        response => {
          console.log(response);
          alert("Xóa sản phẩm khỏi giỏ hàng thành công");
          this.router.navigate(['app-shoppingcart']);
          // Xóa sản phẩm khỏi giỏ hàng thành công
        },
        error => {
          console.log(error);
          // Xảy ra lỗi khi xóa sản phẩm khỏi giỏ hàng
        }
      );
    }
  }

  makePayment(){
    this.router.navigate(['app-payment']);
  }
}
