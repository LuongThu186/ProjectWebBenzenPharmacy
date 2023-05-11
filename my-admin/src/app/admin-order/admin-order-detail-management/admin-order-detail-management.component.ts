import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminOrderService } from 'src/app/Services/admin-order.service';
import { AdminCustomerService } from 'src/app/Services/admin-customer.service';
import { Order } from 'src/app/Interfaces/order';
import { PopupStatusComponent } from '../popup-status/popup-status.component';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
  selector: 'app-admin-order-detail-management',
  templateUrl: './admin-order-detail-management.component.html',
  styleUrls: ['./admin-order-detail-management.component.css']
})
export class AdminOrderDetailManagementComponent {
  order = new Order();
  total: string;
  public setOrder(o:Order){
    this.order = o
  }
  customer:any;
  orders:any;
  errMessage:string=""
  totalPrice: number = 0;
  // quantity: number = 0;
  price: number = 0;
  status: string;

  constructor( private activateRoute:ActivatedRoute,
               private _fs:AdminOrderService, 
               private router:Router, 
               private _service:AdminCustomerService,
               private matDialog:MatDialog,
              )
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

  openDialog(){
    const dialogRef = this.matDialog.open(PopupStatusComponent, {
      width: '320px',
      // data: {status: this.status}
    }
    )
    dialogRef.afterClosed().subscribe(
      result => console.log("Dialog output:", result)
    );
  }

  searchOrder(_id:string){
    this._fs.getOrderDetail(_id).subscribe({
      next:(data)=>{this.order=data
      },
      error:(err)=>{this.errMessage=err}
    }) 
    this.findSum(this.order)
  }

  findSum(item:any){
    this.price = parseFloat((item.Price.replace(" đ/Hộp", "")).replace(".", ""));
    this.totalPrice = this.price * item.quantity   
    this.total = this.totalPrice.toLocaleString("vi-VN", { minimumFractionDigits: 0 });
    return this.total
    }
  
    putOrderStatus(_id:string){
      this._fs.updateOrderStatus(_id).subscribe({
        next:(data)=>{this.order=data
        },
        error:(err)=>{this.errMessage=err}
      }) 
  
    }

  cancelOrder(){
      if(window.confirm('Do you want to delete this order ?')){
        this._fs.cancelOrder(this.order).subscribe({
          next:(data)=>{this.orders=data},
          error:(err)=>{this.errMessage=err}
        }),
        this.router.navigate(['admin-order-management'])
      }

    }


  goBack(){
    this.router.navigate(['admin-custoner-management'])
  }
}
