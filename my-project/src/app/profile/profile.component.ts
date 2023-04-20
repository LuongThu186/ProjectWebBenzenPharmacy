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
    this.adding = false;
    this.editingAddress=false;
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

  cancelEdit() {
    this.name = this.name;
    this.gender = this.gender;
    this.phone=this.phone;
    this.birthday = this.birthday;
    this.email = this.email;

    this.editing = false;
  }


  nameAddress = 'Nhà thuốc Benzen';
  phoneAddress = '0332583xxx';
  addressDelivery='Số 669, QL1, Khu phố 3, Phường Linh Xuân, Quận Thủ Đức, Thành phố Hồ Chí Minh Số 669, QL1, Khu phố 3, Phường Linh Xuân, Quận Thủ Đức, Thành phố Hồ Chí Minh ';
  defaultAddress = 'true';

  nameAddressAdd: string='';
  phoneAddressAdd='';
  addressDeliveryAdd: string='';

  nameAddressNew: string='';
  phoneAddressNew='';
  addressDeliveryNew: string='';

  adding =false;
  addNewAddress=false
// haha làm sai rồi chỉnh dùm đi chỉnh sao khum có biết - Thêm đia chỉ
  addAddress(){
    this.nameAddressAdd = ' ';
    this.phoneAddressAdd= ' ';
    this.addressDeliveryAdd = ' ';

    this.adding = true;
    this.editing = false;
    this.editingAddress=false;
  }

  saveAddress(){
    this.nameAddressNew = this.nameAddressAdd;
    this.phoneAddressNew=this.phoneAddressAdd;
    this.addressDeliveryNew = this.addressDeliveryAdd;

    this.adding= false;
    this.addNewAddress=true
  }

  cancelAddress(){

    this.adding = false;
  }
  // edit địa chỉ
  nameAddressEdit: string=' ';
  phoneAddressEdit= '';
  addressDeliveryEdit: string='';
  editingAddress=false;

  editAddress(){
    this.nameAddressEdit = this.nameAddress;
    this.phoneAddressEdit=this.phoneAddress;
    this.addressDeliveryEdit = this.addressDelivery;

    this.editingAddress = true;
    this.adding = false;
    this.editing = false;
  }
  saveEditAddress(){
    this.nameAddress = this.nameAddressEdit;
    this.phoneAddress=this.phoneAddressEdit;
    this.addressDelivery = this.addressDeliveryEdit;

    this.editingAddress= false;
  }
  cancelEditAddress() {
    this.nameAddress = this.nameAddress;
    this.phoneAddress=this.phoneAddress;
    this.addressDelivery = this.addressDelivery;

    this.editingAddress = false;
  }
}
