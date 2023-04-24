import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css']
})
export class InforComponent {
  id: any = "overview/";
  tabChange(ids:any){
    this.id= ids;
    console.log(this.id)
  }

  constructor(private route: ActivatedRoute) { }
  
  // điều hướng routerLink đến Id thông tin
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.id = params['id'];
      });
    }
}
