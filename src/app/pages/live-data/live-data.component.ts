import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { KavassService } from '../../kavass/kavass.service';

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss'],
})
export class LiveDataComponent {
  faSearch = faSearch;
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

  getBorderColor(barrier: any): string {
    if (barrier.online === 2 && barrier.alarm >= 1 && barrier.alarm <= 6) {
      return 'border-red-500';
    }
    if (barrier.online === 1 && barrier.alarm === 0) {
      return 'border-green-500';
    }
    return 'border-red-500';
  }

  openLiveDataModal() {
    this.isModalOpen = true;
  }

  closeLiveDataModal() {
    this.isModalOpen = false;
  }
}
