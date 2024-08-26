import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help.component';
import { FaqComponent } from './faq/faq.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
    children: [
      { path: 'faq', component: FaqComponent },
      { path: 'transaction', component: TransactionComponent },
      // { path: 'account', component: PaymentComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'faq', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpRoutingModule {}
