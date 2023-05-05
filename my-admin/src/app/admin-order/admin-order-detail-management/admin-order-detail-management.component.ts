import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminOrderService } from 'src/app/Services/admin-order.service';
import { AdminCustomerService } from 'src/app/Services/admin-customer.service';

@Component({
  selector: 'app-admin-order-detail-management',
  templateUrl: './admin-order-detail-management.component.html',
  styleUrls: ['./admin-order-detail-management.component.css']
})
export class AdminOrderDetailManagementComponent {
  customer:any;
  order:any;
  errMessage:string=""
  constructor(private activateRoute:ActivatedRoute,private _fs:AdminOrderService, private router:Router, private _service:AdminCustomerService )
  {
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null)
        {
          this.searchOrder(id),
          this.searchCustomer(id)
        }
      }
    )
  }

  searchOrder(_id:string){
    this._fs.getOrderDetail(_id).subscribe({
      next:(data)=>{this.order=data},
      error:(err)=>{this.errMessage=err}
    })
    return this.order
  }
  
  searchCustomer(CustomerID:any){
    this._service.getCustomerDetail(CustomerID).subscribe({
      next:(data)=>{this.customer=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  

  goBack(){
    this.router.navigate(['admin-custoner-management'])
  }
}
