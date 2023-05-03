import { Component } from '@angular/core';
import { AdminCustomerService } from 'src/app/Services/admin-customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-customer-detail-management',
  templateUrl: './admin-customer-detail-management.component.html',
  styleUrls: ['./admin-customer-detail-management.component.css']
})
export class AdminCustomerDetailManagementComponent {
  selectedCustomer:any;
  customer:any;
  errMessage:string=""
  constructor(private activateRoute:ActivatedRoute,private _fs:AdminCustomerService, private router:Router)
  {
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null)
        {
          this.searchCustomer(id)
        }
      }
    )
  }

  searchCustomer(_id:string){
    this._fs.getCustomerDetail(_id).subscribe({
      next:(data)=>{this.customer=data},
      error:(err)=>{this.errMessage=err}
    })
  }

  goBack(){
    this.router.navigate(['admin-custoner-management'])
  }
  


}
