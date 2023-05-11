import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.css']
})
export class ChangePswComponent {
  phonenumber: string='';
  oldPassword: string='';
  newPassword: string='';

  constructor(private authService: AuthService) { }

  async changePassword() {
    try {
      if (!this.phonenumber) {
        alert('Vui lòng nhập số điện thoại');
        return;
      }
      const response = await this.authService.changePassword(this.phonenumber, this.oldPassword, this.newPassword);
      alert(response);
    } catch (error) {
      console.error(error);
    }
  }
}
