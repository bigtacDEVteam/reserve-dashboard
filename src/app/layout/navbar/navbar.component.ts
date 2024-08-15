import { Component, Output, EventEmitter } from '@angular/core';

import { faBars, faUsers, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  faBars = faBars;
  faUsers = faUsers;
  faBell = faBell;

  toggleSidebarCollapse() {
    this.toggleSidebar.emit();
  }
}
