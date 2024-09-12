import { Component } from '@angular/core';
import {
  faGlobe,
  faMobileScreen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  faGlobe = faGlobe;
  faMobileScreen = faMobileScreen;
  faEnvelope = faEnvelope;
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService) {}

  submitRegister() {
    // 1 - checks if password match
    if (this.password === this.confirmPassword) {
      // 2 - call register function from authservice
      this.authService
        .register(this.name, this.email, this.password)
        .subscribe({
          //3 - subscribe - manages responses
          next: (response) => {
            console.log('registration success :', response);
            alert('Registration Success!');
          },
          error: (response) => {
            console.log('registration fails :', response.error.message);
            alert(response.error.message);
          },
        });
    } else {
      alert('Password does not match');
    }
  }

  backgroundImageUrl: string = 'assets/images/garage.jpg';
}
