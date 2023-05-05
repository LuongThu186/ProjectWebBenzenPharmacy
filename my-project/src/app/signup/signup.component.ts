import { Component } from '@angular/core';
import { AccountCustomer } from '../Interfaces/AccountCustomer';
import { AccountcustomerService } from '../Services/accountcustomer.service';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';
import { Profile } from '../Interfaces/profile'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  account = new AccountCustomer();
  errMessage:string='';
  customer = new Profile();
  public setProfile(p:Profile){
    this.customer = p;
  }

  constructor(private _service: AccountcustomerService, private router:Router, private _ps:ProfileService) {}
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
    this._ps.postCustomer(this.account).subscribe({
      next:(data)=>{this.customer=data},
      error:(err)=>{this.errMessage=err}
    })
  }


}
