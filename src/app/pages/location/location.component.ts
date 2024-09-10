import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  constructor(private router: Router) {}

  goToDashboard() {
    // Redirect to main routing pages, for example, the dashboard
    this.router.navigate(['/dashboard']);
  }
}
