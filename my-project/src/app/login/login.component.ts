import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AccountcustomerService } from '../Services/accountcustomer.service'
import { ReturnStatement } from '@angular/compiler';
import { AccountCustomer } from '../Interfaces/AccountCustomer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  phonenumber: string= '';
  password: string= '';

  constructor(
    private authService: AuthService,
    private router:Router,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {
    }

  isPhoneNumberValid: boolean = true;

  checkPhoneNumber(): void {
    const phoneNumberRegex = /^(\+84|0)[1-9][0-9]{7,8}$/; //kiểm tra chuỗi đã nhập là số điện thoại hợp lệ không?
    this.isPhoneNumberValid = phoneNumberRegex.test(this.phonenumber);
  }


  onSubmit() {
    if(!this.isPhoneNumberValid){
      alert('Vui lòng nhập đúng số điện thoại!');
      return false
    }
    else{
      this.authService.login(this.phonenumber, this.password).subscribe(
        (user) => {
          // Đăng nhập thành công, chuyển hướng người dùng đến trang chính
          this.authService.setCurrentUser(user);
          alert("Đăng nhập thành công!")
          this.router.navigate(['/app-home'], { relativeTo: this.route });

        },
        (error) => {
          // Hiển thị thông báo lỗi
          alert('Đăng nhập không thành công');
        }
      );
      return false
    }
  }
}
