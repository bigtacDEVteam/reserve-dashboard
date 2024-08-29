import { Component } from '@angular/core';
import { faBars, faUsers, faBell } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  faBars = faBars;
  faUsers = faUsers;
  faBell = faBell;
  email = '';
  password = '';
  constructor(private authService: AuthService) {}

  logOut() {
    this.authService.logout();
    console.log('test logout');
  }
}
