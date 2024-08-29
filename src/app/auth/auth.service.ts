import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'Bearer Token';

  constructor(private router: Router) {}
  login(email: string, password: string): boolean {
    console.log('test');

    if (email === 'test@gmail' && password === 'pass123') {
      localStorage.setItem('isLoginIn', 'true');
      console.log('match email');
      this.router.navigate(['/dashboard']);
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }
  //add logout
  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoginIn');
    console.log('Logging out and navigating to login page');
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    return localStorage.getItem('isLoginIn') === 'true';
  }
}
