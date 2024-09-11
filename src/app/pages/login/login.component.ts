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

  // This is original code
  // submitLogin() {
  //   this.authService.login(this.email, this.password);
  //   console.log('test login');
  // }

  submitLogin() {
    //1 - calls login function from authService
    this.authService.login(this.email, this.password).subscribe({
      //2- subscribe to manage server response
      next: (response) => {
        console.log('submit Login successful:', response);
      },
      error: (error) => {
        //console.log('submitLogin failed');
        alert(`Login Unsuccesful : ${error.error.message}`);
      },
    });
  }
}
