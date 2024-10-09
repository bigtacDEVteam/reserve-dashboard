import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { KavassService } from '../../../kavass/kavass.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;
  isModalOpen = false;
  selectedDeviceId: string | null = null;

  parkingBarrierList: any[] = [];

  constructor(private kavassService: KavassService) {}

  ngOnInit(): void {
    this.kavassService.getAccessToken().subscribe({
      next: (response) => {
        if (response.code === 200) {
          this.fetchParkingBarrierList();
        } else {
          console.error('Failed to retrieve access token:', response.msg);
        }
      },
      error: (error) => {
        console.error('Error retrieving access token:', error.message);
      },
    });
  }

  fetchParkingBarrierList() {
    this.kavassService.getParkingBarrierList(1, 20).subscribe({
      next: (response) => {
        this.parkingBarrierList = response.data.content;
        console.log('Parking barrier list:', this.parkingBarrierList);
      },
      error: (error) => {
        console.error('Error fetching parking barrier list:', error.message);
      },
    });
  }

 
  openControlModal(barrier: any) {
    this.selectedDeviceId = barrier.did; // Set the selected device ID
    this.isModalOpen = true;
  }

  closeControlModal() {
    this.isModalOpen = false;
    this.selectedDeviceId = null; // Reset the selected device ID
  }
}
