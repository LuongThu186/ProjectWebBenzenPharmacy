import { Component } from '@angular/core';
import { AdminOrderService } from 'src/app/Services/admin-order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-order-management',
  templateUrl: './admin-order-management.component.html',
  styleUrls: ['./admin-order-management.component.css']
})
export class AdminOrderManagementComponent {
  orders:any;
  errMessage:string=""
  page: number = 1;
  count : number = 0 ;
  result : number
  value: any;

  constructor(public _service: AdminOrderService, private router: Router){
    this._service.getOrders().subscribe({
      next:(data)=>{this.orders=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  totalOrder(data: string | any[]){
    debugger  
  this.value=data    
  return this.result = data.length
}

  deleteOrder(_id:string){
  if (window.confirm('Are you sure you want to delete this order?'))
  {
    this._service.deleteOrder(_id).subscribe(
      {
      next:(data)=>{this.orders=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  }

  viewCustomerDetail(f:any){
    this.router.navigate(['admin-order-detail-management',f._id])
   }
}
