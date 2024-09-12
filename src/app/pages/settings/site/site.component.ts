import { Component } from '@angular/core';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrl: './site.component.scss',
})
export class SiteComponent {
  faTrash = faTrash;
  faPen = faPen;
  isModalOpen = false;

  openSiteModal() {
    this.isModalOpen = true;
  }

  closeSiteModal() {
    this.isModalOpen = false;
  }
}
