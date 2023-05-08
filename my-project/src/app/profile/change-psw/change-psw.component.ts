import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.css']
})
export class ChangePswComponent {
  password: string='';

  confirmPassword: string= '';
  passwordCurrent: string='';

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
      if (this.passwordCurrent.length < 6) {
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
    
  }
}
