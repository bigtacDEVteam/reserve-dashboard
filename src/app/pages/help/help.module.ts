import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { FaqComponent } from './faq/faq.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HelpComponent,
    FaqComponent,
    TransactionComponent,
    ContactComponent,
  ],
  imports: [CommonModule, HelpRoutingModule],
})
export class HelpModule {}
