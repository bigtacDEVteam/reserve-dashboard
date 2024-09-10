import { Component, EventEmitter, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-site-modal',
  templateUrl: './site-modal.component.html',
  styleUrl: './site-modal.component.scss',
})
export class SiteModalComponent {
  faClose = faClose;

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
