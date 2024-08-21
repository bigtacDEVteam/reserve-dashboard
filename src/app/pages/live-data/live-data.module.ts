import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveDataComponent } from './live-data.component';
import { LiveDataRoutingModule } from './live-data-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LiveDataModalComponent } from '../../components/live-data-modal/live-data-modal.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LiveDataComponent, LiveDataModalComponent],
  imports: [
    CommonModule,
    LiveDataRoutingModule,
    FontAwesomeModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
  ],
  exports: [LiveDataModalComponent],
})
export class LiveDataModule {}
