// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { AuthService } from './auth.service';
// import { catchError, switchMap } from 'rxjs/operators';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private authService: AuthService) { }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = this.authService.getAccessToken();
//     let authReq = req;
//     if (token) {
//       authReq = this.addToken(req, token);
//     }
//     return next.handle(authReq).pipe(
//       catchError(error => {
//         if (error.status === 401) {
//           // Handle token refresh
//           return this.authService.refreshToken().pipe(
//             switchMap((response: any) => {
//               this.authService.storeTokens(response.token, response.refreshToken); // Store new tokens
//               authReq = this.addToken(req, response.token);
//               return next.handle(authReq);
//             }),
//             catchError(refreshError => {
//               // Handle refresh token failure
//               this.authService.logout();
//               return throwError(refreshError);
//             })
//           );
//         } else {
//           return throwError(error);
//         }
//       })
//     );
//   }

//   private addToken(req: HttpRequest<any>, token: string) {
//     return req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();
    let authReq = req;
    if (token) {
      authReq = this.addToken(req, token);
    }
    return next.handle(authReq).pipe(
      catchError(error => {
        if (error.status === 401) {
          // Handle token refresh
          return this.authService.refreshToken().pipe(
            switchMap((response: any) => {
              const newToken = response.token;
              const newRefreshToken = response.refreshToken;
              const username = this.authService.getUsername() || ''; // Provide default value if null
              this.authService.storeTokens(newToken, newRefreshToken, username);
              authReq = this.addToken(req, newToken);
              return next.handle(authReq);
            }),
            catchError(refreshError => {
              // Handle refresh token failure
              this.authService.logout();
              return throwError(refreshError);
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addToken(req: HttpRequest<any>, token: string) {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

