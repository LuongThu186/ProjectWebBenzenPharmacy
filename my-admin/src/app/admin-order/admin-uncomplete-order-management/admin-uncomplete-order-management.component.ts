import { Component } from '@angular/core';
import { AdminOrderService } from 'src/app/Services/admin-order.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/Interfaces/order';

@Component({
  selector: 'app-admin-uncomplete-order-management',
  templateUrl: './admin-uncomplete-order-management.component.html',
  styleUrls: ['./admin-uncomplete-order-management.component.css']
})
export class AdminUncompleteOrderManagementComponent {
  orders:any;
  errMessage:string=""
  page: number = 1;
  count : number = 0 ;
  result : number
  value: any;
  order= new Order()

  public setOrder(o:Order){
    this.order = o
  }

  constructor(public _service: AdminOrderService, private router: Router){}

  ngOnInit(){
    this._service.searchUncompletedOrder().subscribe({
      next:(data)=>{this.orders=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  totalOrder(data: string | any[]){
    debugger  
  this.value=data    
  return this.result = data.length
}

  orderConfirm(_id:any){
    if (window.confirm('Are you sure you want to confirm this order?'))
    {
    this._service.getOrderConfirm(_id).subscribe({
      next:(data)=>{this.orders=data},
      error:(err)=>{this.errMessage=err}
    })
  }}

  deleteOrder(_id:any){
    if (window.confirm('Are you sure you want to delete this order?'))
    {
    this._service.deleteOrder(_id).subscribe({
      next:(data)=>{this.order=data},
      error:(err)=>{this.errMessage=err}
    })
  }}

}
