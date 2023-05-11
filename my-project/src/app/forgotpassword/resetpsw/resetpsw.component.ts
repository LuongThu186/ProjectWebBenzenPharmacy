import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-resetpsw',
  templateUrl: './resetpsw.component.html',
  styleUrls: ['./resetpsw.component.css']
})
export class ResetpswComponent implements OnInit{
  password: string=' '
  confirmPassword: string= '';

  @ViewChild('passwordInput') passwordInput: any;
  @ViewChild('confirmPasswordInput') confirmPasswordInput: any;

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

  Form: any
  constructor(private _FormBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.Form = this._FormBuilder.group({
      pwd: ['', [Validators.required]]
    })
  }
    get pwd(){
      return this.Form.controls['pwd']
    }
}
