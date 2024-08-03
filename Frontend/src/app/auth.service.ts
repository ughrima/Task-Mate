// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:8080/api/v1/auth';

//   constructor(private http: HttpClient) { }

//   signIn(credentials: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/signin`, credentials)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   refreshToken(): Observable<any> {
//     const refreshToken = localStorage.getItem('refreshToken');
//     return this.http.post(`${this.apiUrl}/refresh`, { token: refreshToken })
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   private handleError(error: HttpErrorResponse): Observable<never> {
//     return throwError(error);
//   }

//   getAccessToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   storeTokens(token: string, refreshToken: string): void {
//     localStorage.setItem('token', token);
//     localStorage.setItem('refreshToken', refreshToken);
//   }

//   signUp(credentials: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/signup`, credentials)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//     localStorage.removeItem('refreshToken');  }
// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  signIn(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  signUp(credentials: any): Observable<any> { // Add this method
    return this.http.post(`${this.apiUrl}/signup`, credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${this.apiUrl}/refresh`, { token: refreshToken })
      .pipe(
        catchError(this.handleError)
      );
  }

  signOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }

  getAccessToken(): string | null {
    return localStorage.getItem('token');
  }

  storeTokens(token: string, refreshToken: string, username: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('username', username);
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  logout(): void {
    this.signOut();  }
}
