import { NgModule, importProvidersFrom } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { AddCategoryLevel2Component } from './admin-caterogy-management/add-category-level2/add-category-level2.component';
import { AddCategoryLevel1Component } from './admin-caterogy-management/add-category-level1/add-category-level1.component';
import { EditCategoryLevel1Component } from './admin-caterogy-management/edit-category-level1/edit-category-level1.component';
import { EditCategoryLevel2Component } from './admin-caterogy-management/edit-category-level2/edit-category-level2.component';
import { HomeComponent } from '../../../my-project/src/app/home/home.component';
import { PopupDeleteComponent } from './admin-caterogy-management/popup-delete/popup-delete.component';

import { MatDialogRef } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminProductEditManagementComponent } from './admin-product/admin-product-edit-management/admin-product-edit-management.component';
import { AdminProductAddManagementComponent } from './admin-product/admin-product-add-management/admin-product-add-management.component';
import { PopupStatusComponent } from './admin-order/popup-status/popup-status.component';
import { from } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
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
    AddCategoryLevel2Component,
    AddCategoryLevel1Component,
    EditCategoryLevel1Component,
    EditCategoryLevel2Component,
    AdminProductDetailManagementComponent,
    HomeComponent,
    PopupDeleteComponent,
    AdminProductEditManagementComponent,
    AdminProductAddManagementComponent,
    PopupStatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    NgxPaginationModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
