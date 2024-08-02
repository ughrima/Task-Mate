// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   isDashboardRoute: boolean = false; // Define the property here

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe((event: NavigationEnd) => {
//       this.isDashboardRoute = this.router.url.startsWith('/dashboard') || 
//                               this.router.url.startsWith('/add-task') || 
//                               this.router.url.startsWith('/settings');
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth.service'; // Import AuthService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDashboardRoute: boolean = false;

  constructor(private router: Router, private authService: AuthService) {} // Add AuthService to constructor

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isDashboardRoute = this.router.url.startsWith('/dashboard') || 
                              this.router.url.startsWith('/add-task') || 
                              this.router.url.startsWith('/settings');
    });
  }

  getUsername(): string | null { // Add this method
    return this.authService.getUsername();
  }

  signOut(): void { // Add this method
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
