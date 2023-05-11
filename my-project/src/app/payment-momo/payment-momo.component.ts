import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { OrdersService } from '../Services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-momo',
  templateUrl: './payment-momo.component.html',
  styleUrls: ['./payment-momo.component.css']
})
export class PaymentMomoComponent implements OnInit {
  ngOnInit(): void {}

  orders: any;
  errMessage: string = '';
  isDonePayment: boolean = false;

  constructor(
    private _authService: AuthService,
    private _orderService: OrdersService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  onComplete() {
    this.isDonePayment = true;
  }

  //popup
  @Input() title: string='';
  @Input() message: string='';
  @Output() confirmed = new EventEmitter<boolean>();

  viewDetail() {
    this.confirmed.emit(true);
    this._orderService.getOrders().subscribe({
      next: (data) => {
        this.orders = data;

        this.router.navigate(['/app-orderdetail/detail/', this.orders[this.orders.length - 1]._id]).then(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }

  goHome() {
    this.confirmed.emit(false);
    this.router.navigate(['/app-home']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
