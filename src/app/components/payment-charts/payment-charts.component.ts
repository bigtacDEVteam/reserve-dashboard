import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-payment-charts',
  templateUrl: './payment-charts.component.html',
  styleUrls: ['./payment-charts.component.scss'],
})
export class PaymentChartsComponent implements OnInit {
  public isBrowser: boolean;

  public lineChartLegend = true;
  public lineChartPlugins = [];
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initializeCharts();
    }
  }

  private initializeCharts(): void {
    this.lineChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: [41, 32, 50, 41, 47, 55, 40],
          label: 'DB/CC Parking',
          backgroundColor: '#4C9AA0',
          borderColor: '#4C9AA0',
          // backgroundColor: '#4C9AA0',
        },
        {
          data: [30, 40, 45, 20, 25, 20, 36],
          label: 'Debit/Credit Card',
          backgroundColor: '#AAD4D7',
          borderColor: '#AAD4D7',
          //   backgroundColor: '#4C9AA0',
        },
        {
          data: [10, 25, 20, 15, 22, 20, 30],
          label: 'e-Wallet',
          backgroundColor: '#306266',
          borderColor: '#306266',
          //  backgroundColor: '#4C9AA0',
        },
      ],
    };
  }
}
