import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { MemberComponent } from './member/member.component';
//import { AccountComponent } from './account/account.component';
import { DevicesComponent } from './devices/devices.component';
import { SiteComponent } from './site/site.component';
import { UnauthorizedComponent } from '../../components/unauthorized/unauthorized.component';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: 'member', component: MemberComponent },
      //{ path: 'account', component: AccountComponent },
      { path: 'device', component: DevicesComponent },
      { path: 'site', component: SiteComponent, canActivate: [AuthGuard] },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent,
      },
      { path: '', redirectTo: 'device', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
