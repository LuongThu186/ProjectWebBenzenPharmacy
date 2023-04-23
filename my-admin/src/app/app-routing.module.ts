import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCustomerDetailManagementComponent } from './admin-customer/admin-customer-detail-management/admin-customer-detail-management.component';
import { AdminCustonerManagementComponent } from './admin-customer/admin-custoner-management/admin-custoner-management.component';

const routes: Routes = [
  {path:"customer-detail", component:AdminCustomerDetailManagementComponent},
  {path:"customer-management", component: AdminCustonerManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
