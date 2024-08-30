import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  currentDateTime: string = ''; // Initialize with an empty string

  ngOnInit() {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000); // Update every second
  }

  updateDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString(); // Format as needed
  }
}
