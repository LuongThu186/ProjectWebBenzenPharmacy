import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { Medicines } from '../Interfaces/Medicine';
import { MedicineService } from '../Services/medicines.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  isLoggedIn = false;
    currentUser: any;
  [x: string]: any;
  category: string = '';
  categories: any[] | undefined;
  medicines: any;
  medicine = new Medicines();
  cartItems: any[] = [];
  quantityItem: number = 0;
  displayItem: boolean = true;
  errMessage: string = '';
  constructor(
    public _service: MedicineService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private authService: AuthService
  ) {
    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;

        // Lấy danh sách các Category duy nhất
        const categories = Array.from(
          new Set(data.map((x: { Category: any }) => x.Category))
        );

        // Lấy danh sách các SubCategory duy nhất theo từng Category
        this.categories = categories.map((category) => {
          return {
            Category: category,
            SubCategories: Array.from(
              new Set(
                data
                  .filter((x: { Category: any }) => x.Category === category)
                  .map((x: { SubCategory: any }) => x.SubCategory)
              )
            ),
          };
        });
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    this._service.getCart().subscribe({
      next: (data) => {
        this.cartItems = data;
        this.quantityItem = this.cartItems.length;
        if(this.cartItems.length > 0){
          this.displayItem = false;
        };
        this.cd.detectChanges();
      }
    });

    this.isLoggedIn = this.authService.isLoggedIn();
    this.currentUser = this.authService.getCurrentUser();
  }

  viewCategory(c:any){
    this.router.navigate(['app-category', c.Category])
  }
  viewSubCategory(c:any, sub_cat:any){
    this.router.navigate(['app-category', c.Category, sub_cat])
  }

  //Phần này là của đăng nhập
  Name:any
  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('CurrentUser')!);
      if (user) {
        this.Name = user.Name;
      }}

    logOut() {
      const confirmed = confirm('Bạn có muốn đăng xuất không?');
      if(confirmed) {
        sessionStorage.removeItem('CurrentUser');
        this.router.navigate(['/login'])
      }

    }





}
