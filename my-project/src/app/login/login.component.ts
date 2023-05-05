import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  phonenumber = '';
  password = '';

  constructor(private authService: AuthService, private router:Router, private route: ActivatedRoute) {}

  onSubmit() {
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
  }
}
