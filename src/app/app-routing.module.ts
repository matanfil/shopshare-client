import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTimeLoginComponent } from './firt-time-login/firt-time-login.component';
import { FtlGuardGuard } from './guards/ftl-guard.guard';
import { AuthGuard } from './guards/auth-guard.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './permit-all-components/login/login.component';
import { LogoutComponent } from './permit-all-components/logout/logout.component';
import { PageNotFoundComponent } from './permit-all-components/page-not-found/page-not-found.component';
import { UnauthenticatedComponent as UnauthorizedComponent } from './permit-all-components/unauthenticated/unauthenticated.component';

const routes: Routes = [
  {
    path: '', 
    canActivate: [AuthGuard],
    children: [
      { path: '', component: LandingPageComponent, pathMatch: 'full'},
      { path: 'ftl', component: FirstTimeLoginComponent, canActivate: [FtlGuardGuard]}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
