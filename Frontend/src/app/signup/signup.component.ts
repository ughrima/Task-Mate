import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email = '';
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    this.authService.signUp({ email: this.email, username: this.username, password: this.password })
      .subscribe(response => {
        console.log('Signup successful', response);
        this.router.navigate(['/signin']);
      }, error => {
        console.error('Signup failed', error);
      });
  }
}
