import { Component, OnInit } from '@angular/core';
import { faBars, faUsers, faBell } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faUsers = faUsers;
  faBell = faBell;
  email = '';
  password = '';
  userName: string = '';
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.setUserName();
  }

  setUserName(): void {
    const role = this.authService.getUserRole();
    const name = this.authService.getUserName();

    if (role === 'admin') {
      this.userName = ` ${name}`;
    } else {
      this.userName = ` ${name}`;
    }
  }
  logOut() {
    this.authService.logout();
    //console.log('test logout');
  }
}
