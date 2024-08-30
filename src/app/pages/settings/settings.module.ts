import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MemberComponent } from './member/member.component';
//import { AccountComponent } from './account/account.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MemberModalComponent } from '../../components/member-modal/member-modal.component';
//import { AccountModalComponent } from '../../components/account-modal/account-modal.component';
//import { PaymentComponent } from './payment/payment.component';
//import { PaymentModalComponent } from '../../components/payment-modal/payment-modal.component';
import { DevicesComponent } from './devices/devices.component';

@NgModule({
  declarations: [
    SettingsComponent,
    MemberComponent,
    MemberModalComponent,
    //AccountComponent,
    //AccountModalComponent,
    //PaymentComponent,
    //PaymentModalComponent,
    DevicesComponent,
  ],

  imports: [CommonModule, FontAwesomeModule, SettingsRoutingModule],
  exports: [
    MemberComponent,
    MemberModalComponent,
    //AccountComponent,
    //AccountModalComponent,
    //PaymentModalComponent,
    //PaymentComponent,
    DevicesComponent,
  ],
})
export class SettingsModule {}
