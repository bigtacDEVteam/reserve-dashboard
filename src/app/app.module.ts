import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { AuthModule } from './auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { LocationComponent } from './pages/location/location.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { KavassService } from './kavass/kavass.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    LocationComponent,
    ForgotPassComponent,
    ResetPasswordComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    // AuthModule,
  ],
  providers: [provideHttpClient(withFetch()), KavassService],
  bootstrap: [AppComponent],
})
export class AppModule {}
