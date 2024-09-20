import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userRole = this.authService.getUserRole();
    const url = state.url;

    // Check if the user is authenticated
    if (!this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/login']);
      return false;
    }

    // Restrict 'location' and 'site-settings' to admin only
    if (
      (url.includes('/location') || url.includes('/site-settings')) &&
      userRole !== 'admin'
    ) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    // Allow access to other routes, like 'dashboard'
    return true;
  }
}
