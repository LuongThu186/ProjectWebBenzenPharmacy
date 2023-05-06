import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../Services/medicines.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../Services/customers.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  cartItems: any;
  errMessage: string = '';
  quantityItem: number = 0;
  displayNumberItem: boolean = true;
  totalPrice: number = 0;
  discountCode: string = '';
  discountPrice: number = 0;
  prePrice: number = 0;
  price: number = 25000;
  deliveryFee: number = 25000;
  isChecked_Confirm: boolean = false;
  isChecked_COD: boolean = false;
  isChecked_MoMo: boolean = false;
  isChecked_Banking: string = '';

  customers: any;
  deliveries:any;
  currentUser: any;
  constructor(
    private _service: MedicineService,
    private _customerService: CustomersService,
    private _authService: AuthService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this._service.getCart().subscribe({
      next: (data) => {
        this.cartItems = data;
        this.quantityItem = this.cartItems.length;
        if (this.cartItems.length > 0) {
          this.displayNumberItem = false;
        }

        for (let item of this.cartItems) {
          const price: number = parseFloat(
            item.Price.replace(' đ/Hộp', '').replace('.', '')
          );
          this.totalPrice += price * item.quantity;
        }

        this.prePrice = this.totalPrice + this.discountPrice;
        this.price = this.prePrice + this.deliveryFee;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });

    this._customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });

    this.currentUser = this._authService.getCurrentUser();
    // this._customerService.getDelivery().subscribe({
    //   next: (data) => {
    //     this.deliveries = data;
    //     this.currentUser = this._authService.getCurrentUser();
    //     for(let address of this.deliveries){
    //       if(address.Phone == this.currentUser.phonenumber){
    //         this.deliveryFee = address.DeliveryFee;
    //       }
    //     }
    //   },
    //   error: (err) => {
    //     this.errMessage = err;
    //   }
    // });
  }

  checkBanking(){
    if(this.isChecked_Banking === 'Banking'){
      this.isChecked_Banking = 'hideBanking';
    }
  }

  applyDiscountCode() {
    if (this.discountCode == '666666') {
      this.discountPrice = this.totalPrice * 0.05;
    } else {
      this.discountPrice = 0;
    }
    this.prePrice = this.totalPrice + this.discountPrice;
    this.price = this.prePrice + this.deliveryFee;
  }

  onComplete() {
    if (this.isChecked_Confirm) {
      alert('Thanh toán thành công');
      if(this.isChecked_COD){
        this.router.navigate(['/app-orderdetail']);
      } else if (this.isChecked_Banking){
        this.router.navigate(['/type-bank-account']);
      } else if (this.isChecked_MoMo){
        this.router.navigate(['/app-payment-momo']);
      }
    } else {
      alert('Vui lòng đồng ý với điều khoản và điều kiện của chúng tôi');
    }
  }
  ngOnInit(): void {}
}
