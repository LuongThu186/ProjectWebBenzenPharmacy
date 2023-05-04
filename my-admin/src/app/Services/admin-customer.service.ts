import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Customer } from '../Interfaces/customer';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminCustomerService {

  constructor(private _http:HttpClient) { }
  getCustomers():Observable<any>
  {
    const headers = new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>('/customers',requestOptions).pipe(
      map(res=>JSON.parse(res)as Array<Customer>),
      retry(3),
      catchError(this.handleError)
    )
  }

  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  getCustomerDetail(_id:string):Observable<any>
  {
    const headers = new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>('/customers/'+_id,requestOptions).pipe(
      map(res=>JSON.parse(res)as Customer),
      retry(3),
      catchError(this.handleError)
    )
  }
}
