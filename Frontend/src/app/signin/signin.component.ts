
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  signin() {
    this.authService.signIn({ username: this.username, password: this.password })
      .subscribe(
        response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('refreshToken', response.refreshToken);
          console.log('Signin successful', response);
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          console.error('Signin failed', error);
          if (error.status === 403) {
            this.errorMessage = 'Access denied: Invalid username or password';
          } else if (error.status === 401) {
            this.errorMessage = 'Unauthorized: Incorrect credentials';
          } else {
            this.errorMessage = `Signin failed: ${error.message}`;
          }
        }
      );
  }
  
}


