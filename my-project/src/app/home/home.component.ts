import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(){}

  ngOnInit(){}
  
  id: any = "home";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }
  
}
