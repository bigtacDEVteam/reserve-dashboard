import { Component } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss',
})
export class MemberComponent {
  faPen = faPen;
  faTrash = faTrash;
  isModalOpen = false;

  openMemberModal() {
    this.isModalOpen = true;
  }

  closeMemberModal() {
    this.isModalOpen = false;
  }
}
