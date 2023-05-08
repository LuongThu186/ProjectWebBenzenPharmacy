import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.css']
})
export class ChangePswComponent implements OnInit{
  phonenumber: string= '';
  password: string='';
  confirmPassword: string= '';
  passwordCurrent: string='';
  currentUser: any;

  constructor(
    public router: Router,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
  ){
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    // const user = JSON.parse(sessionStorage.getItem('CurrentUser')!);
    // if (user) {
    //   this.password = user.password;
    // }
  }

  @ViewChild('passwordInput') passwordInput: any;
  @ViewChild('confirmPasswordInput') confirmPasswordInput: any;
  @ViewChild('passwordInputCurrent') passwordInputCurrent: any;

  onCheckedCurrent(){
    const passwordInputCurrent = this.passwordInputCurrent.nativeElement;

    if(this.passwordCurrent.trim().length === 0){
      this.passwordInputCurrent.value = true;
      return    
    }
    else{
      if (passwordInputCurrent.value.length < 6) {
        alert('Mật khẩu phải từ 6 kí tự trở lên');
      }
    }
  }

  onChecked() {
    const passwordInput = this.passwordInput.nativeElement;
    if(this.password.trim().length === 0){
      this.passwordInput.value = true;
      return    
    } else
    if (passwordInput.value.length < 6) {
      alert('Mật khẩu phải từ 6 kí tự trở lên');
    }

  }

  checkPasswordsMatch() {
    
    const passwordInput = this.passwordInput.nativeElement;
    const confirmPasswordInput = this.confirmPasswordInput.nativeElement;

    if (this.confirmPassword.trim().length === 0) {
      this.confirmPasswordInput = true;
    } else
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert('Mật khẩu không khớp');
    }
  }

  onClick(){
    if(this.passwordCurrent.trim().length === 0 || this.password.trim().length === 0 || this.confirmPassword.trim().length ===0 ){
      alert('Vui lòng nhập đủ thông tin bắt buộc')
      return 
    }
    else if (this.password !== this.confirmPassword) {
      alert('Mật khẩu không khớp')
      return 
    }
    else{
      

    }
  }
}
