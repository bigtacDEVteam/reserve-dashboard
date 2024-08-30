import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { MemberComponent } from './member/member.component';
//import { AccountComponent } from './account/account.component';
//import { PaymentComponent } from './payment/payment.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: 'member', component: MemberComponent },
      //{ path: 'account', component: AccountComponent },
      //{ path: 'payment', component: PaymentComponent },
      { path: 'device', component: DevicesComponent },
      { path: '', redirectTo: 'device', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
