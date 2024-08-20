import { Component, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  faPen = faPen;
  faTrash = faTrash;

  @Input() isOpen = false;

  closeModal() {
    this.isOpen = false;
  }
}
