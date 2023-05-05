import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders,} from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Profile } from '../Interfaces/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }
  postCustomer(aCustomer:any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.post<any>('/customers',JSON.stringify(aCustomer), requestOptions).pipe(
      map((res) => JSON.parse(res) as Profile),
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  updateCustomer(aCustomer:any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    );
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    };
    return this._http.put<any>('/customers',JSON.stringify(aCustomer), requestOptions).pipe(
      map((res) => JSON.parse(res) as Profile),
      retry(3),
      catchError(this.handleError)
    );
  }

}
