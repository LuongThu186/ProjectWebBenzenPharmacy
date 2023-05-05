import { Component } from '@angular/core';
import { AccountCustomer } from '../Interfaces/AccountCustomer';
import { Customers } from '../Interfaces/Customer';
import { AccountcustomerService } from '../Services/accountcustomer.service';
import { CustomersService } from '../Services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  account = new AccountCustomer();
  customer = new Customers();
  errMessage: string = '';
  constructor(
    private _service: AccountcustomerService,
    private router: Router,
    private _customerService: CustomersService
  ) {}
  public setAccount(a: AccountCustomer) {
    this.account = a;
  }
  postAccount() {
    this._service.postAccount(this.account).subscribe({
      next: (data) => {
        this.account = data;


        // alert('Đăng ký thành công');
        this.router.navigate(['/app-login']);
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  postCustomer() {
    // this.customer.CustomerName = this.account.Name;
    // this.customer.Phone = this.account.phonenumber;
    // this.customer.Mail = this.account.Mail;
    this._customerService.postCustomer(this.account).subscribe({
      next: (data) => {
        this.account = data;
        alert('Đăng ký thành công');
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
}
