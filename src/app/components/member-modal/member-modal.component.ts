import { Component, EventEmitter, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-member-modal',
  templateUrl: './member-modal.component.html',
  styleUrl: './member-modal.component.scss',
})
export class MemberModalComponent {
  faClose = faClose;

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
