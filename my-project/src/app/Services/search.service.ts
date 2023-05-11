import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:3000/search';

  constructor(private http: HttpClient) {}

  search(keyword: string) {
    const url = `${this.apiUrl}?keyword=${keyword}`;
    return this.http.get<any[]>(url);
  }
}
