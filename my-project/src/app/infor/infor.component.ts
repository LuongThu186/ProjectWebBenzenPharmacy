import { Component } from '@angular/core';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css']
})
export class InforComponent {
  id: any = "overview";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }
}
