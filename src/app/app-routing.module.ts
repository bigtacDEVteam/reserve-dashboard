import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { LocationComponent } from './pages/location/location.component'; // Import the location component
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgotpass', component: ForgotPassComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'location',
    component: LocationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./layout/main/main.module').then((m) => m.MainModule),
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
