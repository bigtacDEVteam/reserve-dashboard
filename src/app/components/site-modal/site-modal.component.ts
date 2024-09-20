import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-site-modal',
  templateUrl: './site-modal.component.html',
  styleUrl: './site-modal.component.scss',
})
export class SiteModalComponent {
  faClose = faClose;

  @Input() item: any;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  closeModal() {
    this.close.emit();
  }

  onSubmit() {
    alert('Successfully saved!');
    this.submit.emit(this.item);
    this.closeModal();
  }
}
