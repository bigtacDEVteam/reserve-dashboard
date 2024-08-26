import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report.component';
import { PaymentChartsComponent } from '../../components/payment-charts/payment-charts.component';
import { DbccTableComponent } from '../../components/dbcc-table/dbcc-table.component';
import { FpxTableComponent } from '../../components/fpx-table/fpx-table.component';
import { EwalletTableComponent } from '../../components/ewallet-table/ewallet-table.component';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
      { path: 'paymentcharts', component: PaymentChartsComponent },
      {
        path: 'dbcctable',
        component: DbccTableComponent,
      },
      {
        path: 'fpxtable',
        component: FpxTableComponent,
      },
      {
        path: 'ewallettable',
        component: EwalletTableComponent,
      },
      { path: '', redirectTo: 'paymentcharts', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
