import { ViewChild } from "@angular/core";
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(){}

  ngOnInit(){}
  
  id: any = "address";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }

  st: any ="status--all"
  tabStatus(sts:any){
    this.st=sts;
    console.log(this.st)
  }

  
  name = 'Nhà thuốc Benzen';
  gender = 'Nữ';
  phone = '0332583xxx'
  birthday = '03/04/2002';
  email = 'benzen@gmail.com';
  avatarUrl = 'assets/image/profile/avt.png';


  nameEdit: string='';
  genderEdit = '';
  phoneEdit='';
  birthdayEdit = '';
  emailEdit: string='';

  editing =false;

  edit() {
    this.nameEdit = this.name;
    this.genderEdit = this.gender;
    this.phoneEdit=this.phone;
    this.birthdayEdit = this.birthday;
    this.emailEdit = this.email;
    this.editing = true;
  }

  saveInfor() {
    this.name = this.nameEdit;
    this.gender = this.genderEdit;
    this.phone=this.phoneEdit;
    this.birthday = this.birthdayEdit;
    this.email = this.emailEdit;
    this.editing = false;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.avatarUrl = reader.result as string;
    };
  }

  // src="" 
  cancelEdit() {
    this.name = this.name;
    this.gender = this.gender;
    this.phone=this.phone;
    this.birthday = this.birthday;
    this.email = this.email;
    this.editing = false;
    this.editing = false;
  }
}
