import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminCaterogyManagementComponent } from './admin-caterogy-management/admin-caterogy-management.component';
import { AdminCustonerManagementComponent } from './admin-customer/admin-custoner-management/admin-custoner-management.component';
import { AdminCustomerDetailManagementComponent } from './admin-customer/admin-customer-detail-management/admin-customer-detail-management.component';
import { AdminMessengerComponent } from './admin-messenger/admin-messenger.component';
import { AdminOrderManagementComponent } from './admin-order/admin-order-management/admin-order-management.component';
import { AdminOrderDetailManagementComponent } from './admin-order/admin-order-detail-management/admin-order-detail-management.component';
import { AdminUncompleteOrderManagementComponent } from './admin-order/admin-uncomplete-order-management/admin-uncomplete-order-management.component';
import { AdminProductManagementComponent } from './admin-product/admin-product-management/admin-product-management.component';
import { AdminProductDetailManagementComponent} from './admin-product/admin-product-detail-management/admin-product-detail-management.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavigateBarComponent } from './navigate-bar/navigate-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminCaterogyManagementComponent,
    AdminCustonerManagementComponent,
    AdminMessengerComponent,
    AdminOrderManagementComponent,
    AdminProductManagementComponent,
    AdminLoginComponent,
    NavigateBarComponent,
    AdminUncompleteOrderManagementComponent,
    AdminOrderDetailManagementComponent,
    AdminCustomerDetailManagementComponent,
    AdminProductDetailManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
