import { Component, OnInit,} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Medicines } from '../Interfaces/Medicine';
import { MedicineService } from '../Services/medicines.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  [x: string]: any;
  category: string = '';
  categories:any[] | undefined
  medicines: any;
  medicineCategory: any;
  medicine= new Medicines();
  errMessage: string = '';
  displayProduct: boolean = true;

  constructor(public _service: MedicineService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let category = param.get('category');
      if (category != null) {
        this.searchMedicinesCategory(category);
      }
    });
    this._service.getMedicines().subscribe({
      next: (data) => {
        // Lấy danh sách các Medicines
        this.medicines = data;

        // Lấy danh sách các Category duy nhất
        const categories = Array.from(new Set(data.map((x: { Category: any; }) => x.Category)));

        // Lấy danh sách các SubCategory duy nhất theo từng Category
        this.categories = categories.map(category => {
          return {
            Category: category,
            SubCategories: Array.from(new Set(data.filter((x: { Category: any; }) => x.Category === category).map((x: {
              SubCategory: any;
}) => x.SubCategory)))
          };
        });
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

  }

  //slide ảnh banner
  currentIndex: number = 0;
  nextIndex: number = 1;

  ngOnInit(){
    this.showSlides();
  }
  showSlides(): void {
    let i: number;
    const slides = document.getElementsByClassName("slide") as HTMLCollectionOf<Element>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<Element>;
    for (i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.display = "none";  
    }
    (slides[this.currentIndex] as HTMLElement).style.display = "block";
    (slides[this.nextIndex] as HTMLElement).style.display = "block";
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // (slides[this.currentIndex] as HTMLElement).style.display = "block";  
    dots[this.currentIndex / 2].className += " active";
    this.currentIndex += 2;
    this.nextIndex += 2;
    if (this.currentIndex >= slides.length) {
      this.currentIndex = 0,
      this.nextIndex = 1;
    }    
    setTimeout(()=>{
      this.showSlides();
    }, 4000);
  }

  currentSlide(n: number): void {
    this.currentIndex = (n - 1) * 2;
    this.nextIndex = this.currentIndex + 1;

    this.showSlides();
  }
  
  searchMedicinesCategory(category: string) {
    this._service.getMedicineCategory(category).subscribe({
      next: (data) => {
        this.medicineCategory = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }


  subCategory: string = '';
  changeSubCategory(subCategory: any) {
    this.subCategory = subCategory;
    this.displayProduct = false;
  }

  viewMedicineDetail(f: any) {
    this.router.navigate(['app-productdetail', f._id]).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }



  th: any = "tieuhoa";
  tabTieuhoa(ths:any){
    this.th= ths;
    console.log(this.th)
  }
}
