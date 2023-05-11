import { Component } from '@angular/core';
import { MedicineService } from '../Services/medicines.service';
import { AuthService } from '../Services/auth.service';
import { OrdersService } from '../Services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../Interfaces/Order';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
})
export class OrderdetailComponent {
  cartItems: any;
  errMessage: string = '';
  quantityItem: number = 0;
  displayNumberItem: boolean = true;
  currentUser: any;
  order = new Orders();
  constructor(
    private _service: MedicineService,
    private _authService: AuthService,
    private _orderService: OrdersService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let orderId = param.get('id');
      if (orderId != null) {
        this.searchOrder(orderId);
        console.log(this.order);
      }
    });

    this._service.getCart().subscribe({
      next: (data) => {
        this.cartItems = data;
        this.quantityItem = this.cartItems.length;
        if (this.cartItems.length > 0) {
          this.displayNumberItem = false;
        }
      },
      error: (err) => {
        this.errMessage = err;
      }
    });

    this.currentUser = this._authService.getCurrentUser();

  }

  searchOrder(orderId: string) {
    this._orderService.getOrder(orderId).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  gotoHome() {
    this.router.navigate(['/app-home']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

}
