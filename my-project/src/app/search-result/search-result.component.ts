import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  medicines: any[] = [];

  constructor(private route: ActivatedRoute) {
    const state = this.route.snapshot.paramMap.get('state');
    if (state) {
      this.medicines = JSON.parse(state).medicines;
    }
  }
}
