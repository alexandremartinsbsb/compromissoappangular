import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { UsuarioService } from './../../../compartilhado/servicos/usuario/usuario.service';
import { UsuarioComponent } from './../usuario.component';

import { ModalComponent } from './../../../compartilhado/modal/modal.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  public alerts: any = [];
  public listaUsuarios: any = [];
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private usuarioService: UsuarioService) {
    this.usuarioService
      .getListaUsuarios()
      .subscribe(
      usuarios => {
        this.listaUsuarios = usuarios;
      });
  }

  public openModalWithComponent(usuario: UsuarioComponent) {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.usuario = usuario;
    this.bsModalRef.content.listagemComponent = this;
  }
}
