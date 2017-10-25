import { UsuarioService, UsuarioInterface } from './../../../compartilhado/servicos/usuario/usuario.service';
import { UsuarioComponent } from './../usuario.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-cmp',
  templateUrl: 'cadastro.component.html'
})
export class CadastroComponent implements OnInit {
  public usuario: UsuarioComponent = new UsuarioComponent();
  private _url = 'http://localhost:8080/compromissoapp-0.0.1-SNAPSHOT/rs/usuarios';
  private _tipoMsg: string;
  private _msg: string;
  private _pk: string;
  private _tipo: string;
  public visualizar: boolean;
  public styleBtnSituacao = {};
  public styleLabelSituacao = {};

  public situacao = false;
  public alerts: any = [];

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this._pk = this.route.snapshot.params['pk'];
    this._tipo = this.route.snapshot.data['type'];
    this.visualizar = false;

    if (this._tipo === 'visualizar') {
      this.visualizar = true;
      this.styleBtnSituacao = { opacity: 0.65 };
      this.styleLabelSituacao = { cursor: 'not-allowed' };
      this.usuarioService.getUsuario(this._pk)
        .subscribe(
        usuario => (this.usuario = usuario)
        );
    } else if (this._tipo === 'editar') {
      this.visualizar = false;
      this.usuarioService.getUsuario(this._pk)
        .subscribe(
        usuario => (this.usuario = usuario)
        );
    }
  }

  public salvarUsuario() {
    if (this._tipo === 'editar') {
      this.usuarioService.alterar(this._pk, this.usuario).subscribe(
        () => {
          this.alerts = [];
          this.alerts.push({
            type: 'success',
            msg: `<strong>Sucesso!</strong> Usuário foi alterado corretamente.`
          });
        },
        erro => {
          this.alerts = [];
          this.alerts.push({
            type: 'danger',
            msg: `<strong>Erro!</strong> Ocorreu algum problema para alterar o usuário.`
          });
        }
      );
    } else {
      this.usuarioService.incluir(this.usuario).subscribe(
        () => {
          this.usuario = new UsuarioComponent();
          this.alerts = [];
          this.alerts.push({
            type: 'success',
            msg: `<strong>Sucesso!</strong> Usuário foi cadastrado corretamente.`
          });
        },
        erro => {
          this.alerts = [];
          this.alerts.push({
            type: 'danger',
            msg: `<strong>Erro!</strong> Ocorreu algum problema para cadastrar o usuário.`
          });
        }
      );
    }
    window.scroll(0, 0);
  }
}
