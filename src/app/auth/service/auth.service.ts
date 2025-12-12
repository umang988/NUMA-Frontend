import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = signal<string | null>(localStorage.getItem('token'));
  private user = signal(null)
  private isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));
  private _url: string = `${environment.api_url}`;

  constructor(
    private _http: HttpClient,
    private _router: Router
) {}

  login(data: any) {
    this._http.post(`${this._url}/login`, { login: data.email, password: data.password }).subscribe((res: any) => {
      this.setAuthData(res);
      this._router.navigate(['pages'])
    })
  }

  authLogin() {
    const token = localStorage.getItem('token');
    if(token) {
        this.token.set(token);
        this.isLoggedIn.set(true);
    } else {
        this._router.navigate(['auth/login']);
    }
  }

  private setAuthData(response: any): void {
    if (response.token) {
      this.token.set(response.token);
      localStorage.setItem('token', response.token);
    }
    if (response) {
      this.user.set(response);
      localStorage.setItem('user', JSON.stringify(response));
    }
    this.isLoggedIn.set(true);
  }

  getToken() {
    return this.token();
  }

  getUser() {
    return this.user();
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }

  logout(): void {
    this.token.set(null);
    this.user.set(null);
    this.isLoggedIn.set(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}