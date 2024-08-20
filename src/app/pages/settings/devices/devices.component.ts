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

  openDeviceModal() {
    this.isModalOpen = true;
  }

  closeDeviceModal() {
    this.isModalOpen = false;
  }
}
