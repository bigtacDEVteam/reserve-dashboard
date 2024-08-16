import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveDataComponent } from './live-data.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LiveDataComponent,
  },
];
@NgModule({
  declarations: [LiveDataComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LiveDataModule {}
