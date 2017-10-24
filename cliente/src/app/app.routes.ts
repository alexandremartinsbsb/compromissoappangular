import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { InscricaoRoutes } from './inscricao/inscricao.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';

import { LoginComponent } from './login/index';

export const routes: Routes = [
  ...LoginRoutes,
  ...InscricaoRoutes,
  ...DashboardRoutes,
  { path: '**', component: LoginComponent }
];
