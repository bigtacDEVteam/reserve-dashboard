import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { KavassService } from '../../kavass/kavass.service';

@Component({
  selector: 'app-control-modal',
  templateUrl: './control-modal.component.html',
  styleUrls: ['./control-modal.component.scss'],
})
export class ControlModalComponent {
  faClose = faClose;
  ultrasonicTime: number = 0;
  activeButton: number | null = null;
  @Input() deviceId: string | null = null;

  constructor(private kavassService: KavassService) {}

  controlBarrier(controlType: number) {
    if (this.deviceId) {
      this.activeButton = controlType;
      this.kavassService.controlBarrier(this.deviceId, controlType).subscribe({
        next: (response) => {
          console.log('Control barrier:', response);
        },
        error: (error) => {
          console.error('Error controlling barrier:', error);
        },
      });
    } else {
      console.error('No device ID provided');
    }
  }

  setUltrasonicTime() {
    console.log('Device ID:', this.deviceId);
    console.log('Ultrasonic Time:', this.ultrasonicTime);

    if (
      this.deviceId &&
      this.ultrasonicTime >= 2 &&
      this.ultrasonicTime <= 98 &&
      this.ultrasonicTime % 2 === 0
    ) {
      this.kavassService
        .setUltrasonicTime(this.deviceId, this.ultrasonicTime)
        .subscribe({
          next: (response) => {
            console.log('Ultrasonic time set successfully:', response);
          },
          error: (error) => {
            console.error('Error setting ultrasonic time:', error);
          },
        });
    } else {
      console.error('Invalid device ID or ultrasonic time');
    }
  }

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
