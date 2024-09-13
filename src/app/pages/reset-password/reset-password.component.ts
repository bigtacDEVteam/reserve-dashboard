import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {
  faGlobe,
  faMobileScreen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent implements OnInit {
  faGlobe = faGlobe;
  faMobileScreen = faMobileScreen;
  faEnvelope = faEnvelope;
  backgroundImageUrl = 'assets/images/garage.jpg';

  token = '';
  newPassword = '';

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    //console.log(window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
    //console.log(urlParams.get('token'));
    this.token = urlParams.get('token') ?? '';
  }
  submitResetPassword() {
    this.authService.resetPassword(this.token, this.newPassword).subscribe(
      (response) => {
        console.log('Password succesfully reset!', response);
        // Add your logic here, like displaying a success message
      },
      (error) => {
        console.error('Error sending password reset link', error);
      }
    );
  }
}
