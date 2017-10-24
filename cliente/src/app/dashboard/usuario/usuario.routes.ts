import { Route } from '@angular/router';

import { ListagemRoutes } from './listagem/listagem.routes';
import { CadastroRoutes } from './cadastro/cadastro.routes';

import { UsuarioComponent } from './index';

export const UsuarioRoutes: Route[] = [
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      ...ListagemRoutes,
      ...CadastroRoutes
    ]
  }
];
