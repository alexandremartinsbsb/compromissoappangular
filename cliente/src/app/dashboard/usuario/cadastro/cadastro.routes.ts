import { Route } from '@angular/router';

import { CadastroComponent } from './index';

export const CadastroRoutes: Route[] = [
  {
    path: 'cadastro/novo',
    component: CadastroComponent,
    data: {
      type: 'novo'
    }
  },
  {
    path: 'cadastro/visualizar/:pk',
    component: CadastroComponent,
    data: {
      type: 'visualizar'
    }
  },
  {
    path: 'cadastro/editar/:pk',
    component: CadastroComponent,
    data: {
      type: 'editar'
    }
  }
];
