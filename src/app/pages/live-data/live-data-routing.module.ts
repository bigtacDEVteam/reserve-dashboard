import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveDataComponent } from './live-data.component';
import { LiveDataModalComponent } from '../../components/live-data-modal/live-data-modal.component';

const routes: Routes = [
  {
    path: '',
    component: LiveDataComponent,
    children: [{ path: 'livemodal', component: LiveDataModalComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveDataRoutingModule {}
