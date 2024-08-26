import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentChartsComponent } from '../../components/payment-charts/payment-charts.component';
import { DbccTableComponent } from '../../components/dbcc-table/dbcc-table.component';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';

@NgModule({
  providers: [provideCharts(withDefaultRegisterables())],
  declarations: [ReportComponent, PaymentChartsComponent, DbccTableComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BaseChartDirective,
  ],
  exports: [PaymentChartsComponent],
})
export class ReportModule {}
