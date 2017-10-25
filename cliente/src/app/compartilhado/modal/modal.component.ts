import { UsuarioService } from './../servicos/usuario/usuario.service';
import { UsuarioComponent } from './../../dashboard/usuario/usuario.component';
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { ListagemComponent } from './../../dashboard/usuario/listagem/listagem.component';

@Component({
  selector: 'app-modal-cmp',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  public usuario: UsuarioComponent = new UsuarioComponent();
  public listagemComponent: ListagemComponent;

  constructor(public bsModalRef: BsModalRef, private usuarioService: UsuarioService) {}

  public excluirUsuario() {
    this.usuarioService.excluir(this.usuario.pk).subscribe(
      () => {
        let novosUsuarios = this.listagemComponent.listaUsuarios.slice(0);
        let indice = novosUsuarios.indexOf(this.usuario);
        novosUsuarios.splice(indice, 1);
        this.listagemComponent.listaUsuarios = novosUsuarios;
        this.listagemComponent.alerts = [];
        this.listagemComponent.alerts.push({
          type: 'success',
          msg: `<strong>Sucesso!</strong> Foi removido o cadastro do usuário corretamente.`
        });
      },
      erro => {
        this.listagemComponent.alerts = [];
        this.listagemComponent.alerts.push({
          type: 'danger',
          msg: `<strong>Erro!</strong> Ocorreu algum problema para excluir o cadastro do usuário.`
        });
      }
    );

    this.bsModalRef.hide();
    this.bsModalRef = null;
  }
}
