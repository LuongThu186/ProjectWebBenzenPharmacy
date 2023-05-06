import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../Services/medicines.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../Services/customers.service';
import { OrdersService } from '../Services/orders.service';
import { AuthService } from '../Services/auth.service';
import { Orders } from '../Interfaces/Order';

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
  orders: any;
  order = new Orders();

  customers: any;
  deliveries:any;
  currentUser: any;
  constructor(
    private _service: MedicineService,
    private _customerService: CustomersService,
    private _authService: AuthService,
    private _orderService: OrdersService,
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

    this._orderService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
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
    this.order.OrderID= Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
    this.order.CustomerName= this.currentUser.Name,
    this.order.OrderDate= new Date().toLocaleDateString(),
    this.order.ShipDate= new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    this.order.Status= 'Chờ xác nhận',
    this.order.Phone= this.currentUser.phonenumber,
    this.order.Email= this.currentUser.Mail,
    this.order.Address= this.currentUser.Address,
    this.order.TotalPrice= this.price,
    this.order.PrePrice= this.prePrice,
    this.order.DeliveryFee= this.deliveryFee,
    this.order.DiscountPrice= this.discountPrice,
    this._orderService.postOrder(this.order).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });


    if (this.isChecked_Confirm) {
      if(this.isChecked_COD){
        this.order.PaymentMethod = 'Thanh toán khi nhận hàng';
        alert('Thanh toán thành công');
        // this.router.navigate(['/app-orderdetail']);
      } else if (this.isChecked_Banking){
        this.order.PaymentMethod = 'Thanh toán qua thẻ ATM nội địa/ Internet Banking';
        alert('Thanh toán thành công');
        this.router.navigate(['/type-bank-account']);
      } else if (this.isChecked_MoMo){
        this.order.PaymentMethod = 'Thanh toán qua ví điện tử Momo';
        alert('Thanh toán thành công');
        this.router.navigate(['/app-payment-momo']);
      } else {
        alert('Vui lòng chọn phương thức thanh toán');
      }
    } else {
      alert('Vui lòng đồng ý với điều khoản và điều kiện của chúng tôi');
    }
  }

  viewOrderDetail() {
    this._orderService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;

        this.router.navigate(['/app-orderdetail/detail/', this.orders[this.orders.length - 1]._id]);
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  ngOnInit(): void {}
}
