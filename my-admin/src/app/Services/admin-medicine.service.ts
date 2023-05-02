import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Medicines } from '../Interfaces/Medicine';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminMedicineService {

  constructor(private _http: HttpClient) { }

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

  postMedicine(medicine: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http
      .post<any>('/medicines', JSON.stringify(medicine), requestOptions)
      .pipe(
        map((res) => JSON.parse(res) as Array<Medicines>),
        retry(3),
        catchError(this.handleError)
      );
  }

  putMedicine(medicine:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
  return this._http.put<any>("/medicines",JSON.stringify(medicine),requestOptions).pipe(
    map(res=>JSON.parse(res) as Array<Medicines>),
    retry(3),
    catchError(this.handleError))
  }

  deleteMedicine(medicineId:string):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
        headers:headers,
        responseType:"text"
    }
    return this._http.delete<any>("/medicines/"+medicineId,requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<Medicines>),
      retry(3),
      catchError(this.handleError))
  }
}
