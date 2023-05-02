import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AccountcustomerService } from '../Services/accountcustomer.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  phoneNumber: string =" ";
  isPhoneNumberValid: boolean = true;
  phoneNumberExist = true;
  errMessage: string = '';

  constructor(
    private router: Router,
    private http: HttpClient, 
    private _service: AccountcustomerService,
  ){}

  ngOnInit() {

  }


  //-----FE
  checkPhoneNumber(): void {
    const phoneNumberRegex = /^(\+84|0)[1-9][0-9]{7,8}$/; //kiểm tra chuỗi đã nhập là số điện thoại hợp lệ không?
    this.isPhoneNumberValid = phoneNumberRegex.test(this.phoneNumber);
  }

  //kiểm tra mã xác nhận
  verificationCode: string = '';
  isVerificationCodeValid: boolean = true;
  
  checkVerificationCode() {
    if (this.verificationCode === '666666') {
      this.isVerificationCodeValid = true;
    } else {
      this.isVerificationCodeValid = false;
    }
  }

  onComplete() {   
      // Kiểm tra số điện thoại hợp lệ và mã xác nhận đúng
    if (!this.isPhoneNumberValid) {
      // Hiển thị thông báo lỗi nếu không hợp lệ
      alert('Vui lòng nhập đúng số điện thoại!');
      return false; // Không chuyển trang nếu không hợp lệ
    }
    else if(this.isVerificationCodeValid===false){
      alert('Vui lòng nhập đúng mã xác nhận!');
      return false;
    }
    else if(!this.isPhoneNumberValid || !this.isVerificationCodeValid) {
      alert('Vui lòng nhập đúng số điện thoại và mã xác nhận!');
      return false;
    }
    else if (!this.phoneNumberExist){
      alert('Số điện thoại không tồn tại trong hệ thống!');
      return false;
    }
    // Xử lý khi các điều kiện đúng
    else {
      // Gọi API kiểm tra số điện thoại
      this._service.checkPhoneNumberExist(this.phoneNumber)
      .subscribe(exist => {
        if (!exist){
          alert('Số điện thoại không tồn tại trong hệ thống!');
          return false;
        }
        else {
          // Điều hướng đến trang app-login
          this.router.navigate(['/app-resetpsw']);
          return true;
        }
      }
      );
    }
    return;
}
}
 
