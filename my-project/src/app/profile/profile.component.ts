import { ViewChild } from "@angular/core";
import { Component, ElementRef } from '@angular/core';
import { AuthService } from "../Services/auth.service";
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from "../Services/profile.service";
import { Profile } from '../Interfaces/profile'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isLoggedIn = true;
  currentUser: any;
  errMessage:string='';
  customer = new Profile();
  public setProfile(p:Profile){
    this.customer = p;
  }

  constructor(private authService: AuthService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private _service: ProfileService
              ){
                this.isLoggedIn = this.authService.isLoggedIn();
                this.currentUser = this.authService.getCurrentUser();
                this._service.updateCustomer(this.customer).subscribe({
                  next:(data)=>{this.customer=data},
                  error:(err)=>{this.errMessage=err}
                })
              }

  Name:any;
  phonenumber:any;
  Mail:any;
  Address:any;
  Gender:any;
  BOD:any;

  ngOnInit():void{
    const user = JSON.parse(sessionStorage.getItem('CurrentUser')!);
      if (user) {
        this.Name = user.Name;
        this.phonenumber = user.phonenumber;
        this.Mail = user.Mail;
        this.Address = user.Address;
        this.Gender = user.Gender;
        this.BOD = user.BOD
      }
  }
  
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

  
  // name = 'Nhà thuốc Benzen';
  // gender = 'Nữ';
  // phone = '0332583xxx'
  // birthday = '03/04/2002';
  // email = 'benzen@gmail.com';
  avatarUrl = 'assets/image/profile/avt.png';

  putCustomer(){
    this._service.updateCustomer(this.customer).subscribe({
      next:(data)=>{this.customer=data},
      error:(err)=>{this.errMessage=err}
    })
  }

<<<<<<< HEAD
<<<<<<< HEAD
  
  postCustomer(){
    this._service.postCustomer(this.customer).subscribe({
      next:(data)=>{this.customer=data},
      error:(err)=>{this.errMessage=err}
    })
  }
=======
>>>>>>> 79195124d9c18ed03c869aa320644c6322e180da
=======
>>>>>>> 79195124d9c18ed03c869aa320644c6322e180da

  // nameEdit: string='';
  // genderEdit = '';
  // phoneEdit='';
  // birthdayEdit = '';
  // emailEdit: string='';

  editing =false;

  edit() {
    this.customer.CustomerName = this.Name;
    this.customer.Gender = this.Gender;
    this.customer.Phone=this.phonenumber;
    this.customer.BOD = this.BOD;
    this.customer.Mail = this.Mail;

    this.editing = true;
    this.adding = false;
    this.editingAddress=false;
  }

  saveInfor() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    this.putCustomer()
>>>>>>> 79195124d9c18ed03c869aa320644c6322e180da
=======
    this.putCustomer()
>>>>>>> 79195124d9c18ed03c869aa320644c6322e180da
    this.Name = this.customer.CustomerName;
    this.Gender = this.customer.Gender;
    this.phonenumber = this.customer.Phone;
    this.BOD = this.customer.BOD;
    this.Mail = this.customer.Mail;

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
    this.Name = this.Name;
    this.Gender = this.Gender;
    this.phonenumber=this.phonenumber;
    this.BOD = this.BOD;
    this.BOD = this.BOD;

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
    this.nameAddressEdit = this.Name;
    this.phoneAddressEdit=this.phonenumber;
    this.addressDeliveryEdit = this.Address;

    this.editingAddress = true;
    this.adding = false;
    this.editing = false;
  }
  saveEditAddress(){
    this.Name = this.nameAddressEdit;
    this.phonenumber = this.phoneAddressEdit;
    this.Address = this.addressDeliveryEdit;

    this.editingAddress= false;
  }
  cancelEditAddress() {
    this.Name = this.Name;
    this.phonenumber = this.phonenumber;
    this.Address = this.Address;

    this.editingAddress = false;
  }
}
