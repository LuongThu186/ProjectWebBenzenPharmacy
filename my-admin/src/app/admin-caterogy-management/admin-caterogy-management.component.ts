import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-caterogy-management',
  templateUrl: './admin-caterogy-management.component.html',
  styleUrls: ['./admin-caterogy-management.component.css']
})
export class AdminCaterogyManagementComponent {
  id: any = "duocpham";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }
}