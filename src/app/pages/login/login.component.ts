import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

import {
  faGlobe,
  faMobileScreen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  faGlobe = faGlobe;
  faMobileScreen = faMobileScreen;
  faEnvelope = faEnvelope;
  backgroundImageUrl: string = 'assets/images/garage.jpg';
  email = '';
  password = '';
  constructor(private authService: AuthService) {}

  submitLogin() {
    this.authService.login(this.email, this.password);
    console.log('test login');
  }
}
