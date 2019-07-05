import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SignupComponent } from './component/signup/signup.component';
import { OtpComponent } from './component/otp/otp.component';
import { IdcreationComponent } from './component/idcreation/idcreation.component';
import { PincreationComponent } from './component/pincreation/pincreation.component';
import { SimpurchaseComponent } from './component/simpurchase/simpurchase.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,
    OtpComponent,
    IdcreationComponent,
    PincreationComponent,
    SimpurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
