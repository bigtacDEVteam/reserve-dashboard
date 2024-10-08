import { Component, EventEmitter, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

@Component({
  selector: 'app-live-data-modal',
  templateUrl: './live-data-modal.component.html',
  styleUrls: ['./live-data-modal.component.scss'],
})
export class LiveDataModalComponent {
  @Output() close = new EventEmitter<void>();
  faClose = faClose;

  closeModal() {
    this.close.emit();
  }

  selectedDateRange: any = {
    startDate: moment().startOf('day'),
    endDate: moment().endOf('day'),
  };
}
