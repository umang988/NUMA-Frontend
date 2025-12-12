import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post('/api/auth/login', { email, password })
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.token.set(response.token);
          }
        })
      );
  }

  authLogin(credentials: { email: string; password: string }): Observable<any> {
    return this.login(credentials.email, credentials.password);
  }

  getToken() {
    return this.token();
  }

  isAuthenticated(): boolean {
    return !!this.token();
  }

  logout(): void {
    this.token.set(null);
  }
}