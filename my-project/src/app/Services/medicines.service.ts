import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Medicines } from '../Interfaces/Medicine';


@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  constructor(private _http: HttpClient) {}
  getMedicines(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/medicines/', requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Medicines>),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  getMedicine(medicineId: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/medicines/detail/' + medicineId, requestOptions).pipe(
      map((res) => JSON.parse(res) as Medicines),
      retry(3),
      catchError(this.handleError)
    );
  }

  getMedicineCategory(category: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/medicines/' + category, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Medicines>),
      retry(3),
      catchError(this.handleError)
    );
  }
  getMedicineSubCategory(category:string, subcategory: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.get<any>('/medicines/' + category + '/' + subcategory, requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<Medicines>),
      retry(3),
      catchError(this.handleError)
    );
  }


  addToCart(med: any): Observable<any> {
    return this._http.post('/cart', med);
  }
  removeFromCart(medId: string): Observable<any> {
    return this._http.delete('/cart/delete/' + medId);
  }
  updateQuantityCart(med: any): Observable<any> {
    return this._http.put('/cart', med);
  }
  getCart(): Observable<any> {
    return this._http.get('/cart');
  }
}
