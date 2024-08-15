import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  providers: [provideCharts(withDefaultRegisterables())],
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BaseChartDirective,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
