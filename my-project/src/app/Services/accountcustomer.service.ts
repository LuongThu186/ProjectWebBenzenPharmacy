import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { AccountCustomer } from '../Interfaces/AccountCustomer';

@Injectable({
  providedIn: 'root'
})
export class AccountcustomerService {

  constructor(private _http: HttpClient) { }

      // if (err) {
      //   console.error(err);
      //   res.status(500).send('Internal server error');
      // } else {
      //   const jsonData = JSON.parse(data);
      //   res.status(200).send(jsonData);
      // }

      getAccountCustomers(): Observable<any> {
        const headers = new HttpHeaders().set(
          'Content-Type',
          'text/plain;charset=utf8'
        )
        const requestOptions: Object = {
          headers: headers,
          responseType: 'text',
        }
        return this._http.get<any>("/accounts/", requestOptions).pipe(
          map(res => JSON.parse(res) as Array<AccountCustomer>),
          retry(3),
          catchError(this.handleError)
        );
      }
      handleError(error: HttpErrorResponse) {
        return throwError(() => new Error(error.message));
      }  
}
