import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {LandingPageComponent} from "./landing-page/landing-page.component";

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectToLogin }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
