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

const routes: Routes = [
  {path:"app-home", component:HomeComponent},
  {path:"shopping-cart", component:ShoppingcartComponent},
  {path:"app-signup", component: SignupComponent},
  {path:"app-login",component:LoginComponent},
  {path:"app-forgotpassword",component:ForgotpasswordComponent},
  {path:"app-signup-otp", component: SignupOTPComponent },
  {path:"app-resetpsw", component: ResetpswComponent},
  {path:"app-change-psw", component:ChangePswComponent},
    {path:"app-productdetail", component:ProductdetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[

]
