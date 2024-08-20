import { Component, EventEmitter, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrl: './payment-modal.component.scss',
})
export class PaymentModalComponent {
  faClose = faClose;

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
