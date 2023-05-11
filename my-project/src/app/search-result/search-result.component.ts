import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../Services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  medicines: any[]=[];
  resultCount: any;

  constructor(private searchService: SearchService, private http: HttpClient, private router:Router) {
    this.searchService.keyword$.subscribe(keyword => {
      if (keyword) {
        this.http.get<any[]>(`http://localhost:3000/search?keyword=${keyword}`).subscribe(medicines => {
          this.medicines = medicines;
          this.resultCount = medicines.length;
        }, error => {
          console.error(error);
        });
      }
    });
  }
  viewMedicineDetail(f: any) {
    this.router.navigate(['app-productdetail', f._id]).then(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }
}
