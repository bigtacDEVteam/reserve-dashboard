import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SettingsComponent } from './settings.component';
import { MemberComponent } from './member/member.component';
//import { AccountComponent } from './account/account.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { MemberModalComponent } from '../../components/member-modal/member-modal.component';
import { AccountModalComponent } from '../../components/account-modal/account-modal.component';
//import { PaymentComponent } from './payment/payment.component';
//import { PaymentModalComponent } from '../../components/payment-modal/payment-modal.component';
import { DevicesComponent } from './devices/devices.component';
import { ControlModalComponent } from '../../components/control-modal/control-modal.component';
import { SiteComponent } from './site/site.component';
import { SiteModalComponent } from '../../components/site-modal/site-modal.component';

@NgModule({
  declarations: [
    SettingsComponent,
    MemberComponent,
    MemberModalComponent,
    AccountComponent,
    AccountModalComponent,
    //PaymentComponent,
    //PaymentModalComponent,
    DevicesComponent,
    ControlModalComponent,
    SiteComponent,
    SiteModalComponent,
  ],

  imports: [CommonModule, FontAwesomeModule, SettingsRoutingModule],
  exports: [
    MemberComponent,
    MemberModalComponent,
    AccountComponent,
    AccountModalComponent,
    //PaymentModalComponent,
    //PaymentComponent,
    DevicesComponent,
  ],
})
export class SettingsModule {}
