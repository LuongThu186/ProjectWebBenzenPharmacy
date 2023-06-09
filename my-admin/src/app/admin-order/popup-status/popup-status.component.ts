import { Component} from '@angular/core';
import { AdminOrderService } from 'src/app/Services/admin-order.service';
import { AdminCustomerService } from 'src/app/Services/admin-customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Interfaces/order';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'


export interface Status {
  Status: string
}

@Component({
  selector: 'app-popup-status',
  templateUrl: './popup-status.component.html',
  styleUrls: ['./popup-status.component.css']
})
export class PopupStatusComponent {
  order = new Order();
  customer:any;
  orders:any;
  errMessage:string="";

  status: Status[] = [
    {Status: 'Đang vận chuyển' },
    {Status: 'Hoàn thành'}
  ];

  constructor( private activateRoute:ActivatedRoute,
    private _fs:AdminOrderService, 
    private router:Router, 
    private _service:AdminCustomerService,
    private dialogRef: MatDialogRef<PopupStatusComponent>,

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

  searchOrder(_id:string){
    this._fs.getOrderDetail(_id).subscribe({
      next:(data)=>{this.order=data
      },
      error:(err)=>{this.errMessage=err}
    }) 

  }

  close(){
    this.dialogRef.close();
  }
  

  save(){
    this.dialogRef.close();
  }

}
