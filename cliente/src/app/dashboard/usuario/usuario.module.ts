import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { ListagemModule } from './listagem/listagem.module';
import { CadastroModule } from './cadastro/cadastro.module';

import { UsuarioComponent } from './usuario.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2BootstrapModule.forRoot(),
    ListagemModule,
    CadastroModule
  ],
  declarations: [UsuarioComponent],
  exports: [UsuarioComponent]
})
export class UsuarioModule {}
