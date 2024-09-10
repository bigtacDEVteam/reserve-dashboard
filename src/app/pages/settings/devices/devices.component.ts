import { Component } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent {
  faPen = faPen;
  faTrash = faTrash;
  isModalOpen = false;

  openControlModal() {
    this.isModalOpen = true;
  }

  closeControlModal() {
    this.isModalOpen = false;
  }
}
