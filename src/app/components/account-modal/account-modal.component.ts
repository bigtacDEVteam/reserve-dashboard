import { Component, EventEmitter, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account-modal',
  templateUrl: './account-modal.component.html',
  styleUrl: './account-modal.component.scss',
})
export class AccountModalComponent {
  faClose = faClose;

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
