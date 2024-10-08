import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChartConfiguration } from 'chart.js';
import {
  faCar,
  faParking,
  faAddressCard,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { KavassService } from '../../kavass/kavass.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  faCar = faCar;
  faParking = faParking;
  faAddressCard = faAddressCard;
  faUsers = faUsers;

  public isBrowser: boolean;

  public barChartLegend = true;
  public barChartPlugins = [];
  public lineChartPlugins = [];

  // Weekly Parking Reserved Data (Bar Chart)
  public barChartData: ChartConfiguration<'bar'>['data'] | undefined;
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Poppins',
            size: 14,
          },
          color: '#ffffff',
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Poppins',
            size: 14,
          },
          color: '#ffffff',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'Poppins',
            size: 16,
          },
          color: '#ffffff',
          usePointStyle: true,
          pointStyleWidth: 18,
          padding: 20,
          boxHeight: 12,
          boxWidth: 20,
        },
      },
    },
  };

  public lineChartData: ChartConfiguration<'line'>['data'] | undefined;
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Poppins',
            size: 14,
          },
          color: '#ffffff',
        },
      },
      y: {
        ticks: {
          font: {
            family: 'Poppins',
            size: 14,
          },
          color: '#ffffff',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'Poppins',
            size: 16,
          },
          color: '#ffffff',
          usePointStyle: true,
          pointStyleWidth: 18,
          padding: 20,
          boxHeight: 12,
          boxWidth: 20,
        },
      },
    },
  };

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initializeCharts();
    }

    // Step 1: Get the access token
    this.kavass.getAccessToken().subscribe({
      next: (response) => {
        console.log('Access token retrieved successfully:', response);

        // Call the second API to get parking barrier list
        this.kavass.getParkingBarrierList(1, 20).subscribe({
          next: (barrierResponse) => {
            console.log('Parking barrier list:', barrierResponse.data.content); // Access content inside data
          },
          error: (error) => {
            console.error('Failed to get parking barrier list:', error.message);
          },
        });
      },
      error: (error) => {
        console.error('Failed to retrieve access token:', error.message);
      },
    });
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private kavass: KavassService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private initializeCharts(): void {
    this.barChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Available Parking',
          backgroundColor: '#4C9AA0',
          borderRadius: 5,
          barThickness: 25,
        },
        {
          data: [30, 40, 50, 20, 60, 20, 70],
          label: 'Reservations',
          backgroundColor: '#d3d3d3',
          borderRadius: 5,
          barThickness: 25,
        },
      ],
    };

    this.lineChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [50, 60, 70, 40, 90, 30, 80],
          label: 'Guests',
          borderColor: '#4C9AA0',
          backgroundColor: '#4C9AA0',
        },
        {
          data: [30, 40, 50, 20, 60, 20, 70],
          label: 'Members',
          borderColor: '#d3d3d3',
          backgroundColor: '#d3d3d3',
        },
      ],
    };
  }
}
