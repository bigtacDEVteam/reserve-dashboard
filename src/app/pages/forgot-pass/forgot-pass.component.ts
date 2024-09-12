import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {
  faGlobe,
  faMobileScreen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent {
  faGlobe = faGlobe;
  faMobileScreen = faMobileScreen;
  faEnvelope = faEnvelope;

  email: string = '';
  backgroundImageUrl = 'assets/images/garage.jpg';

  constructor(private authService: AuthService) {}

  submitForgotPassword() {
    this.authService.forgotPassword(this.email).subscribe(
      (response) => {
        console.log('Password reset link sent!', response);
        // Add your logic here, like displaying a success message
      },
      (error) => {
        console.error('Error sending password reset link', error);
      }
    );
  }
}
