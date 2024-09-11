import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  // private authSecretKey = 'Bearer Token';

  constructor(
    private cookie: CookieService,
    private router: Router,
    private http: HttpClient
  ) {}

  // register
  //1- create register function,
  //submits 3 values,
  //use observables to handle asynchronous operation
  register(name: string, email: string, password: string): Observable<any> {
    //2- use POST method to write data
    return this.http
      .post<any>(
        'https://reserve-dashboard-07c5d37ce5f3.herokuapp.com/v1/auth/register',
        { name, email, password }
      )
      .pipe(
        //3-.pipe - transforms data from observable   //manage response such as error message or else, comes from 'post'
        tap((response) => {
          //4-.tap - processing data from pipe
          if (response && response.tokens.access.token) {
            console.log('registration success', response.user);
            this.router.navigate(['/login']);
          } else {
            console.error('Registration fails :', response.error);
          }
        })
      );
  }

  // login
  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(
        'https://reserve-dashboard-07c5d37ce5f3.herokuapp.com/v1/auth/login',
        { email, password }
      )
      .pipe(
        tap((response) => {
          //response is data response from API call from server
          if (response && response.tokens.access.token) {
            //if access token has value, return true
            console.log('Login successful:', response.user);
            this.isAuthenticated = true; // Set authentication status

            this.cookie.set('userId', response.user.id);
            this.cookie.set('accessToken', response.tokens.access.token);

            // // Navigate to /dashboard
            this.router
              .navigate(['/location']) //
              .then(() => console.log('Navigation to /location successful'))
              .catch((err) => console.error('Navigation error:', err));
          } else {
            console.error('Login failed:', response);
            console.log(response.status); // NOTE : These wont render, idk why, but its non-breaking
          }
        })
      );
  }

  //add logout
  logout() {
    this.isAuthenticated = false;
    this.cookie.delete('userId');
    this.cookie.delete('accessToken');
    console.log('Logging out and navigating to login page');
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    if (this.cookie.get('accessToken')) {
      return true;
    } else {
      return false;
    }
  }
}
