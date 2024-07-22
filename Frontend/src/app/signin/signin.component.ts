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

  constructor(private authService: AuthService, private router: Router) { }

  signin() {
    this.authService.signIn({ username: this.username, password: this.password })
      .subscribe(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        console.log('Signin successful', response);
        this.router.navigate(['/']);
      }, error => {
        console.error('Signin failed', error);
      });
  }
}
