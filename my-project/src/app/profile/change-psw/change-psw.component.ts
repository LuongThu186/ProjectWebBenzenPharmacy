import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.css']
})
export class ChangePswComponent {
  password: string=' '
  confirmPassword: string= '';

  @ViewChild('passwordInput') passwordInput: any;
  @ViewChild('confirmPasswordInput') confirmPasswordInput: any;

  onChecked() {
    const passwordInput = this.passwordInput.nativeElement;
    if (passwordInput.value.length < 6) {
      alert('Mật khẩu phải từ 6 kí tự trở lên');
    }

  }

  checkPasswordsMatch() {
    const passwordInput = this.passwordInput.nativeElement;
    const confirmPasswordInput = this.confirmPasswordInput.nativeElement;

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert('Mật khẩu không khớp');
    }
  }
}
