import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(){}

  ngOnInit(){}
  
  id: any = "orderhistory";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }

  st: any ="status--all"
  tabStatus(sts:any){
    this.st=sts;
    console.log(this.st)
  }

}
