import { Component, EventEmitter, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-control-modal',
  templateUrl: './control-modal.component.html',
  styleUrl: './control-modal.component.scss',
})
export class ControlModalComponent {
  faClose = faClose;

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
