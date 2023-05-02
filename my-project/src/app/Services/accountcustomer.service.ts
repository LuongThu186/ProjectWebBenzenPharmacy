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

        checkPhoneNumberExist(phoneNumber: string): Observable<any> {
        const headers = new HttpHeaders().set(
          'Content-Type',
          'text/plain;charset=utf8'
        )
        const requestOptions: Object = {
          headers: headers,
          responseType: 'text',
        }
        return this._http.get<any>(`${"/accounts/"}?phone=${phoneNumber}`, requestOptions).pipe(
          map(res => JSON.parse(res) as Array<AccountCustomer>),
          retry(3),
          catchError(this.handleError)
        );
      }
      handleError(error: HttpErrorResponse) {
        return throwError(() => new Error(error.message));
      }

      // checkPhoneNumberBE(phoneNumber: string): Observable<any> {
      //   return this._http.get(`${"/accounts/"}/phone/${phoneNumber}`);
      // }
}
