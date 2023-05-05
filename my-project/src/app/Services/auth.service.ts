import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  login(phonenumber: string, password: string) {
    const url = 'http://localhost:3000/login';
    const data = { phonenumber, password };

    return this.http.post(url, data);
  }

  logout() {
    sessionStorage.removeItem('CurrentUser');
  }

  setCurrentUser(user: any) {
    sessionStorage.setItem('CurrentUser', JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(sessionStorage.getItem('CurrentUser')!);
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
