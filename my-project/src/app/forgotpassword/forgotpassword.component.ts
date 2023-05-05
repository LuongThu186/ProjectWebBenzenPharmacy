import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AccountcustomerService } from '../Services/accountcustomer.service'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  phoneNumber: string =" ";
  phoneNumbers: any;
  isPhoneNumberValid: boolean = true;
  phoneNumberExist = true;
  phoneData: string="";
  errorMessage: string="";

  constructor(
    private router: Router,
    private http: HttpClient,
    private accountService: AccountcustomerService
  ){}

  ngOnInit() {

  }

  sendCode(){
    if (!this.isPhoneNumberValid) {
      alert('Vui lòng nhập đúng số điện thoại!');
    }
    else if(this.phoneNumber===" "){
      alert('Vui lòng nhập số điện thoại!');     
    }
    else {
      this.accountService.checkPhoneNumberExist(this.phoneNumber).subscribe({
        next: (data) => {
          this.phoneNumbers = data;
          if (this.phoneNumbers.Phone === this.phoneNumber) {
            alert('Gửi mã thành công!');
            this.router.navigate(['/app-resetpsw']);
          }
          else {
            alert('Số điện thoại không tồn tại!');
          }
        },
        error: (err) => {
          this.errorMessage = err;
        }
      });
    }
}
  resend(){
    if (!this.isPhoneNumberValid) {
      alert('Vui lòng nhập đúng số điện thoại!');
    }
    else if(this.phoneNumber===" "){
      alert('Vui lòng nhập số điện thoại!');     
    }
    else{
      this.accountService.checkPhoneNumberExist(this.phoneNumber).subscribe({
        next: (data) => {
          this.phoneNumbers = data;
          if (this.phoneNumbers.Phone === this.phoneNumber) {
            alert('Đã gửi lại mã xác nhận!');
            this.router.navigate(['/app-resetpsw']);
          }
          else {
            alert('Số điện thoại không tồn tại!');
          }
        },
        error: (err) => {
          this.errorMessage = err;
        }
      });
    }
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
        alert('Vui lòng nhập đúng số điện thoại!');
        return false
      }
      else if(this.phoneNumber===" "){
        alert('Vui lòng nhập số điện thoại!');     
        return false
      }
    else if(this.isVerificationCodeValid===false){
      alert('Vui lòng nhập đúng mã xác nhận!');
      return false;
    }
    else if(!this.isPhoneNumberValid || !this.isVerificationCodeValid) {
      alert('Vui lòng nhập đúng số điện thoại và mã xác nhận!');
      return false;
    }
    else {
      this.accountService.checkPhoneNumberExist(this.phoneNumber).subscribe({
        next: (data) => {
          this.phoneNumbers = data;
          if (this.phoneNumbers.Phone === this.phoneNumber) {
            alert('Số điện thoại hợp lệ!');
            this.router.navigate(['/app-resetpsw']);
          }
          else {
            alert('Số điện thoại không tồn tại!');
          }
        },
        error: (err) => {
          this.errorMessage = err;
        },
      });
      return
    }
  }
}

