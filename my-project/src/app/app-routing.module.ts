import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpswComponent } from './forgotpassword/resetpsw/resetpsw.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupOTPComponent } from '../app/signup/signup-otp/signup-otp.component';
import { HomeComponent } from './home/home.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import {ChangePswComponent} from './profile/change-psw/change-psw.component'
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CategoryComponent } from './category/category.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { InforComponent } from './infor/infor.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { PaymentKVLComponent } from './payment-kvl/payment-kvl.component';
import { TypeBankAccountComponent } from './type-bank-account/type-bank-account.component';
import { PaymentMomoComponent } from './payment-momo/payment-momo.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"app-home", component:HomeComponent},
  {path:"app-shoppingcart", component:ShoppingcartComponent},
  {path:"app-signup", component: SignupComponent},
  {path:"app-login",component:LoginComponent},
  {path:"app-forgotpassword",component:ForgotpasswordComponent},
  {path:"app-signup-otp", component: SignupOTPComponent },
  {path:"app-resetpsw", component: ResetpswComponent},
  {path:"app-change-psw", component:ChangePswComponent},
  {path:"app-productdetail/:id", component:ProductdetailComponent},
  {path:"app-category", component:CategoryComponent},
  {path:"app-category/:category", component:CategoryComponent},
  {path:"app-category/:category/:subcategory", component:CategoryComponent},
  {path:"app-payment", component: PaymentComponent},
  {path:"app-payment/:id", component: PaymentComponent},
  {path:"app-profile", component: ProfileComponent},
  {path:"app-orderdetail", component: OrderdetailComponent},
  {path:"app-orderdetail/detail/:id", component: OrderdetailComponent},
  {path:"app-infor", component: InforComponent},
  {path:"app-chatbox", component: ChatboxComponent},
  {path:"payment-kvl", component:PaymentKVLComponent},
  {path:"app-type-bank-account", component:TypeBankAccountComponent},
  {path:"app-shoppingcart", component:ShoppingcartComponent},
  {path:"app-payment-momo", component:PaymentMomoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
  HomeComponent,
  ShoppingcartComponent,
  SignupComponent,
  LoginComponent,
  ForgotpasswordComponent,
  SignupOTPComponent,
  ResetpswComponent,
  ChangePswComponent,
  ProductdetailComponent,
  CategoryComponent,
  ProfileComponent,
  PaymentComponent,
  OrderdetailComponent,
  InforComponent,
  ChatboxComponent,
  PaymentKVLComponent,
  TypeBankAccountComponent,
  ShoppingcartComponent

]
