import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(){}

  ngOnInit(){}
  
  id: any = "giamdauhasotkhangsinh";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }
  
}
