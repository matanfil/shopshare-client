import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './permit-all-components/page-not-found/page-not-found.component';
import { UnauthenticatedComponent } from './permit-all-components/unauthenticated/unauthenticated.component';
import { LoginComponent } from './permit-all-components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './permit-all-components/logout/logout.component';
import { FirstTimeLoginComponent } from './firt-time-login/firt-time-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    UnauthenticatedComponent,
    LoginComponent,
    LogoutComponent,
    FirstTimeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
