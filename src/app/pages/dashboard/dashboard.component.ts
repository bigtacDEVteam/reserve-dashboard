import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChartConfiguration, ChartOptions } from 'chart.js';

import {
  faCar,
  faParking,
  faAddressCard,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

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
  };

  public lineChartData: ChartConfiguration<'line'>['data'] | undefined;
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initializeCharts();
    }
  }

  private initializeCharts(): void {
    this.barChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Available Parking',
          backgroundColor: '#4C9AA0',
        },
        {
          data: [30, 40, 50, 20, 60, 20, 70],
          label: 'Reservations',
          backgroundColor: '#d3d3d3',
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
        },
        {
          data: [30, 40, 50, 20, 60, 20, 70],
          label: 'Members',
          borderColor: '#d3d3d3',
        },
      ],
    };
  }
}
