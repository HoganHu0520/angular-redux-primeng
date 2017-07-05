import { Routes } from '@angular/router';

import { LoginPageComponent } from './pages/login/page';
import { LandingPageComponent } from './pages/landing/page';

let routers: Routes = [];
export default routers = [
  { path: 'login', component: LoginPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
