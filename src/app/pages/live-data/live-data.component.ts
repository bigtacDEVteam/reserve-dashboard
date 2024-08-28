import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.scss'],
})
export class LiveDataComponent {
  faSearch = faSearch;
  isModalOpen = false;

  openLiveDataModal() {
    this.isModalOpen = true;
  }

  closeLiveDataModal() {
    this.isModalOpen = false;
  }
}
