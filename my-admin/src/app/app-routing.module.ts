import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddCategoryLevel1Component } from './admin-caterogy-management/add-category-level1/add-category-level1.component';
import { AddCategoryLevel2Component } from './admin-caterogy-management/add-category-level2/add-category-level2.component';
import { AdminCaterogyManagementComponent } from './admin-caterogy-management/admin-caterogy-management.component';
import { EditCategoryLevel1Component } from './admin-caterogy-management/edit-category-level1/edit-category-level1.component';
import { EditCategoryLevel2Component } from './admin-caterogy-management/edit-category-level2/edit-category-level2.component';
import { AdminCustomerDetailManagementComponent } from './admin-customer/admin-customer-detail-management/admin-customer-detail-management.component';
import { AdminCustonerManagementComponent } from './admin-customer/admin-custoner-management/admin-custoner-management.component';
import { AdminMessengerComponent } from './admin-messenger/admin-messenger.component';
import { AdminOrderDetailManagementComponent } from './admin-order/admin-order-detail-management/admin-order-detail-management.component';
import { AdminOrderManagementComponent } from './admin-order/admin-order-management/admin-order-management.component';
import { AdminUncompleteOrderManagementComponent } from './admin-order/admin-uncomplete-order-management/admin-uncomplete-order-management.component';
import { AdminProductManagementComponent } from './admin-product/admin-product-management/admin-product-management.component';
import { AdminProductDetailManagementComponent } from './admin-product/admin-product-detail-management/admin-product-detail-management.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PopupDeleteComponent } from './admin-caterogy-management/popup-delete/popup-delete.component';


const routes: Routes = [
  // {path:"", component: AdminLoginComponent},
  {path:"admin-order-management", component: AdminOrderManagementComponent },
  {path:"admin-order-detail-management", component: AdminOrderDetailManagementComponent},
  {path:"admin-uncomplete-order-management", component: AdminUncompleteOrderManagementComponent},
  {path:"admin-custoner-management", component: AdminCustonerManagementComponent},
  {path:"admin-customer-detail-management", component: AdminCustomerDetailManagementComponent},
  {path:"admin-messenger", component: AdminMessengerComponent},
  {path:"admin-caterogy-management", component: AdminCaterogyManagementComponent},
  {path:"add-category-level1", component: AddCategoryLevel1Component},
  {path:"add-category-level2", component: AddCategoryLevel2Component},
  {path:"edit-category-level1", component: EditCategoryLevel1Component},
  {path:"edit-category-level2", component: EditCategoryLevel2Component},
  {path:"admin-product-management", component:AdminProductManagementComponent},
  {path:"admin-product-detail-management", component: AdminProductDetailManagementComponent},
  {path: "popup-delete", component: PopupDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[

]
