import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { LocationComponent } from '../../pages/location/location.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'live-data',
        loadChildren: () =>
          import('../../pages/live-data/live-data.module').then(
            (m) => m.LiveDataModule
          ),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../../pages/report/report.module').then(
            (m) => m.ReportModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../../pages/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'help',
        loadChildren: () =>
          import('../../pages/help/help.module').then((m) => m.HelpModule),
      },
      { path: 'location', component: LocationComponent }, 
    ],
  },
  { path: '**', redirectTo: 'pages/dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
