import { Component } from '@angular/core';
import { AccountCustomer } from '../Interfaces/AccountCustomer';
import { AccountcustomerService } from '../Services/accountcustomer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  account = new AccountCustomer();
  errMessage:string='';
  constructor(private _service: AccountcustomerService, private router:Router) {}
  public setAccount(a:AccountCustomer) {
    this.account=a;
  }
  postAccount() {
    this._service.postAccount(this.account).subscribe({
      next:(data) => {this.account=data
        alert("Đăng ký thành công");
        this.router.navigate(['/app-login']);},
      error:(err) => {this.errMessage=err}

    })
  }


}
