import { Component } from '@angular/core';
import { AdminCustomerService } from 'src/app/Services/admin-customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-custoner-management',
  templateUrl: './admin-custoner-management.component.html',
  styleUrls: ['./admin-custoner-management.component.css']
})
export class AdminCustonerManagementComponent {
  customers:any;
  errMessage:string=""
  page: number = 1;
  count : number = 0 ;
  result : number
  value: any;

  constructor(public _service: AdminCustomerService, private router: Router){
    this._service.getCustomers().subscribe({
      next:(data)=>{this.customers=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  totalCustomer(data: string | any[]){
    debugger  
  this.value=data    
  return this.result = data.length
}

viewCustomerDetail(f:any){
  this.router.navigate(['admin-customer-detail-management',f._id])
 }

}
