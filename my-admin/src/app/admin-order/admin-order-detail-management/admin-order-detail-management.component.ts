import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminOrderService } from 'src/app/Services/admin-order.service';
import { AdminCustomerService } from 'src/app/Services/admin-customer.service';
import { Order } from 'src/app/Interfaces/order';


@Component({
  selector: 'app-admin-order-detail-management',
  templateUrl: './admin-order-detail-management.component.html',
  styleUrls: ['./admin-order-detail-management.component.css']
})
export class AdminOrderDetailManagementComponent {
  order = new Order();
  public setOrder(o:Order){
    this.order = o
  }
  customer:any;
  orders:any;
  errMessage:string=""
  totalPrice: number = 0;
  quantity: number = 0;
  price: number = 0;

  // calculatPrice(item:any){
  //   const price: number = parseFloat((item.Price.replace(" đ/Hộp", "")).replace(".", ""));
  //   this.totalPrice = price * item.quantity;
  // }

  constructor(private activateRoute:ActivatedRoute,private _fs:AdminOrderService, private router:Router, private _service:AdminCustomerService )
  {
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null)
        {
          this.searchOrder(id)
        }
      }
    )
  }

  searchOrder(_id:string){
    this._fs.getOrderDetail(_id).subscribe({
      next:(data)=>{this.order=data
        // this.price = parseFloat((this.order.OrderMedicine.Price.replace(" đ/Hộp", "")).replace(".", ""));
        // this.totalPrice = this.price * this.order.OrderMedicine.quantity      
      },
      error:(err)=>{this.errMessage=err}
    }) 
  }

  cancelOrder(_id:any){
      if(window.confirm('Do you want to delete this order ?')){
        this._fs.cancelOrder(_id).subscribe({
          next:(data)=>{this.order=data},
          error:(err)=>{this.errMessage=err}
        }),
        this.router.navigate(['admin-order-management'])
      }
    }

  goBack(){
    this.router.navigate(['admin-custoner-management'])
  }
}
