import { UsuarioComponent } from './../usuario.component';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { ModalComponent } from './../../../compartilhado/modal/modal.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  public alerts: any = [];
  public listaUsuarios: any = [];
  private _url = 'http://localhost:8080/compromissoapp-0.0.1-SNAPSHOT/rs/usuarios';
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private http: Http) {
    this.http
      .get(this._url)
      .map(res => res.json())
      .subscribe(
        usuarios => {
          this.listaUsuarios = usuarios;
        },
        erro => console.log(erro)
      );
  }

  public openModalWithComponent(usuario: UsuarioComponent) {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.usuario = usuario;
    this.bsModalRef.content.listagemComponent = this;
  }
}
