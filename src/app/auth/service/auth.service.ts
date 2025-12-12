import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = signal<string | null>(localStorage.getItem('token'));
  private user = signal<any>(JSON.parse(localStorage.getItem('user') || 'null'));
  private isLoggedIn = signal<boolean>(!!localStorage.getItem('token'));

  constructor(
    private _http: HttpClient,
    private _router: Router
) {}

  login(email: string, password: string): Observable<any> {
    return this._http.post('/api/auth/login', { email, password })
      .pipe(
        tap((response: any) => {
          this.setAuthData(response);
        })
      );
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
    if (response.user) {
      this.user.set(response.user);
      localStorage.setItem('user', JSON.stringify(response.user));
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