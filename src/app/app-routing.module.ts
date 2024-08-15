import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'live-data',
    loadChildren: () =>
      import('./pages/live-data/live-data.module').then(
        (m) => m.LiveDataModule
      ),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./pages/report/report.module').then((m) => m.ReportModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/help/help.module').then((m) => m.HelpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
