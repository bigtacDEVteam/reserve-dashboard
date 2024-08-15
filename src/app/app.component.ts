import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Reserve Admin Dashboard';
  isSidebarCollapsed = true;
  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed; // Toggle the collapse state
  }
}
