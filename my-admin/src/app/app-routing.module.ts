import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './admin-caterogy-management/add-category/add-category.component';
import { AdminCaterogyManagementComponent } from './admin-caterogy-management/admin-caterogy-management.component';
import { AdminCustomerDetailManagementComponent } from './admin-customer/admin-customer-detail-management/admin-customer-detail-management.component';
import { AdminCustonerManagementComponent } from './admin-customer/admin-custoner-management/admin-custoner-management.component';
import { AdminMessengerComponent } from './admin-messenger/admin-messenger.component';
import { AdminOrderDetailManagementComponent } from './admin-order/admin-order-detail-management/admin-order-detail-management.component';
import { AdminOrderManagementComponent } from './admin-order/admin-order-management/admin-order-management.component';
import { AdminUncompleteOrderManagementComponent } from './admin-order/admin-uncomplete-order-management/admin-uncomplete-order-management.component';

const routes: Routes = [
  {path:"admin-order-management", component: AdminOrderManagementComponent },
  {path:"admin-order-detail-management", component: AdminOrderDetailManagementComponent},
  {path:"admin-uncomplete-order-management", component: AdminUncompleteOrderManagementComponent},
  {path:"admin-custoner-management", component: AdminCustonerManagementComponent},
  {path:"admin-customer-detail-management", component: AdminCustomerDetailManagementComponent},
  {path:"admin-messenger", component: AdminMessengerComponent},
  {path:"admin-caterogy-management", component: AdminCaterogyManagementComponent},
  {path:"add-category", component:AddCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
