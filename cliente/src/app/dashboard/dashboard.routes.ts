import { Route } from '@angular/router';

import { PrincipalRoutes } from './principal/principal.routes';
import { UsuarioRoutes } from './usuario/usuario.routes';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      ...PrincipalRoutes,
      ...UsuarioRoutes]
  }
];
