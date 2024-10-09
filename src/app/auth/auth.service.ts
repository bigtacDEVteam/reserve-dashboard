import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false; //nak track auth status

  constructor(
    private cookie: CookieService,
    private router: Router,
    private http: HttpClient
  ) {}
  getUserRole(): string | null {
    const role = this.cookie.get('userRole');
    return role ? role : null;
  }
  getUserName(): string | null {
    const userName = this.cookie.get('userName');
    //console.log('Retrieved userName:', userName);
    return userName ? userName : 'Guest';
  }
  isAdmin(): boolean {
    const role = this.getUserRole();
    return role === 'admin';
  }
  isAuthenticatedUser(): boolean {
    // const accessToken = this.cookie.get('accessToken'); // Check for access token
    const accessToken = true;
    return !!accessToken;
  }

  // Register user
  register(name: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });

    return this.http
      .post<any>(
        'http://13.212.34.171:8080/v1/auth/register',
        { name, email, password },
        { headers }
      )

      .pipe(
        tap((response) => {
          if (response && response.tokens.access.token) {
            console.log('Registration successful', response.user);
            this.router.navigate(['/login']);
          } else {
            console.error('Registration failed:', response.error);
          }
        }),
        catchError((error) => {
          console.error('Registration error:', error);
          return throwError(() => error);
        })
      );
  }

  // Login user
  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>('http://13.212.34.171:8080/v1/auth/login', { email, password })
      .pipe(
        tap((response) => {
          if (response && response.tokens.access.token) {
            console.log('Login successful:', response.user);
            this.isAuthenticated = true;

            this.cookie.set('userId', response.user.id);
            this.cookie.set('accessToken', response.tokens.access.token);
            this.cookie.set('refreshToken', response.tokens.refresh.token);
            this.cookie.set('userRole', response.user.role);
            this.cookie.set('userName', response.user.name);
            // Check user role and redirect accordingly
            if (response.user.role === 'admin') {
              this.router.navigate(['/location']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          }
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return throwError(() => error);
        })
      );
  }

  // Logout user
  logout(): Observable<any> {
    const refreshToken = this.cookie.get('refreshToken');
    this.cookie.delete('accessToken');
    this.router.navigate(['/login']); //navbar logout
    console.log('Logged out successfully');

    return this.http
      .post<any>('http://13.212.34.171:8080/v1/auth/logout', { refreshToken })
      .pipe(
        tap(() => {
          this.cookie.delete('userId');
          this.cookie.delete('accessToken');
          this.cookie.delete('refreshToken');
          this.isAuthenticated = false;
          console.log('Logout successful, navigating to login page');
          this.router.navigate(['/login']);
        }),
        catchError((error) => {
          console.error('Logout error:', error);
          return throwError(() => error);
        })
      );
  }

  // Refresh token
  refreshToken(): Observable<any> {
    const refreshToken = this.cookie.get('refreshToken');

    return this.http
      .post<any>('http://13.212.34.171:8080/v1/auth/refresh-tokens', {
        refreshToken,
      })
      .pipe(
        tap((response) => {
          if (response && response.access.token) {
            console.log('Token refreshed:', response);
            this.cookie.set('accessToken', response.access.token);
            this.cookie.set('refreshToken', response.refresh.token);
          }
        }),
        catchError((error) => {
          console.error('Refresh token error:', error);
          return throwError(() => error);
        })
      );
  }

  // Forgot password
  forgotPassword(email: string): Observable<any> {
    return this.http
      .post<any>('http://13.212.34.171:8080/v1/auth/forgot-password', { email })
      .pipe(
        tap(() => {
          console.log('Password reset link sent to:', email);
          alert('Check your email for the password reset link.');
        }),
        catchError((error) => {
          console.error('Forgot password error:', error);
          return throwError(() => error);
        })
      );
  }

  // Reset password
  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http
      .post<any>(
        `http://13.212.34.171:8080/v1/auth/reset-password?token=${token}`,
        {
          password: newPassword,
        }
      )
      .pipe(
        tap(() => {
          console.log('Password reset successfully');
          alert('Password has been reset.');
          this.router.navigate(['/login']);
        }),
        catchError((error) => {
          console.error('Reset password error:', error);
          return throwError(() => error);
        })
      );
  }

  // Send verification email
  sendVerificationEmail(): Observable<any> {
    const userId = this.cookie.get('userId');

    return this.http
      .post<any>('http://13.212.34.171:8080/v1/auth/send-verification-email', {
        userId,
      })
      .pipe(
        tap(() => {
          console.log('Verification email sent');
          alert('A verification email has been sent.');
        }),
        catchError((error) => {
          console.error('Send verification email error:', error);
          return throwError(() => error);
        })
      );
  }

  // Verify email
  verifyEmail(token: string): Observable<any> {
    return this.http
      .post<any>('http://13.212.34.171:8080/v1/auth/verify-email', { token })
      .pipe(
        tap(() => {
          console.log('Email verified successfully');
          alert('Email verified successfully!');
        }),
        catchError((error) => {
          console.error('Verify email error:', error);
          return throwError(() => error);
        })
      );
  }
}
