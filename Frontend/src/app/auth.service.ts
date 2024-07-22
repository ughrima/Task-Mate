// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// interface SignInData {
//   username: string;
//   password: string;
// }

// interface SignUpData {
//   email: string;
//   username: string;
//   password: string;
// }

// interface AuthResponse {
//   token: string;
//   refreshToken: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private baseUrl = 'http://localhost:8080/api/v1/auth';

//   constructor(private http: HttpClient) {}

//   signIn(data: SignInData): Observable<AuthResponse> {
//     return this.http.post<AuthResponse>(`${this.baseUrl}/signin`, data);
//   }

//   signUp(data: SignUpData): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}/signup`, data);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SignInData {
  username: string;
  password: string;
}

interface SignUpData {
  email: string;
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  signIn(data: SignInData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/signin`, data);
  }

  signUp(data: SignUpData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, data);
  }
}
