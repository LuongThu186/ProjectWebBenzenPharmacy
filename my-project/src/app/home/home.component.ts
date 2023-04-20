import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(){}

  ngOnInit(){}
  
  gdhs: any = "giamdauhasot";
  tabGiamdauhasot(gdhss:any){
    this.gdhs= gdhss;
    console.log(this.gdhs)
  }
  
  th: any = "tieuhoa";
  tabTieuhoa(ths:any){
    this.th= ths;
    console.log(this.th)
  }

  csct: any = "chamsoccothe";
  tabChamsoccothe(cscts:any){
    this.csct= cscts;
    console.log(this.csct)
  }

  nk: any = "nhietke";
  tabNhietke(nks:any){
    this.nk= nks;
    console.log(this.nk)
  }
  
}
