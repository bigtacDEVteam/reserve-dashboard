import { Component, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  faPen = faPen;
  faTrash = faTrash;
  constructor(public authService: AuthService) {}
  @Input() isOpen = false;

  closeModal() {
    this.isOpen = false;
  }
}
