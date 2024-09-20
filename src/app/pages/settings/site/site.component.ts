import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

interface User {
  role: string;
  isEmailVerified: boolean;
  name: string;
  email: string;
  id: string;
}

interface UserResponse {
  results: User[];
}

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;
  isModalOpen = false;
  selectedSite: any = null;
  results: User[] = [];

  constructor(
    private http: HttpClient,
    private cookiesService: CookieService
  ) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    const token = this.cookiesService.get('accessToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    this.http
      .get<UserResponse>(
        'https://reserve-dashboard-07c5d37ce5f3.herokuapp.com/v1/users',
        { headers }
      )
      .subscribe(
        (data) => {
          this.results = data.results.filter((user) => user.role === 'user');
          console.log('getAllUsers', this.results);
        },
        (error) => {
          console.error('Error Fetching All Users', error);
        }
      );
  }

  openSiteModal(item: any) {
    this.selectedSite = { ...item };
    this.isModalOpen = true;
  }

  closeSiteModal() {
    this.isModalOpen = false;
    this.selectedSite = null;
  }

  onSubmit(updatedItem: any) {
    console.log('updatedItem,', updatedItem);

    const token = this.cookiesService.get('accessToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    const payload = {
      name: updatedItem.name,
      email: updatedItem.email,
    };

    this.http
      .patch(
        `https://reserve-dashboard-07c5d37ce5f3.herokuapp.com/v1/users/${updatedItem.id}`,
        payload,
        { headers }
      )
      .subscribe(
        (response) => {
          console.log('User Data Updated :', response);
          this.fetchUsers();
          this.closeSiteModal();
        },
        (error) => {
          console.error('Error updating User data', error);
        }
      );
  }

  deleteUser(userId: string) {
    const token = this.cookiesService.get('accessToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (confirm('Are you sure you want to delete this user?')) {
      this.http
        .delete(
          `https://reserve-dashboard-07c5d37ce5f3.herokuapp.com/v1/users/${userId}`,
          { headers }
        )
        .subscribe(
          (response) => {
            console.log('User deleted successfully:', response);
            this.fetchUsers(); // Refresh the list
          },
          (error) => {
            console.error('Error deleting user:', error);
          }
        );
    }
  }
}
