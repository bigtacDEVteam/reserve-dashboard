import { Component } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  faPen = faPen;
  faTrash = faTrash;
  isModalOpen = false;

  openAccountModal() {
    this.isModalOpen = true;
  }

  closeAccountModal() {
    this.isModalOpen = false;
  }
}
