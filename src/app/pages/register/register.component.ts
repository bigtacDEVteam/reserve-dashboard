import { Component } from '@angular/core';
import {
  faGlobe,
  faMobileScreen,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  faGlobe = faGlobe;
  faMobileScreen = faMobileScreen;
  faEnvelope = faEnvelope;

  backgroundImageUrl: string = 'assets/images/garage.jpg';
}
