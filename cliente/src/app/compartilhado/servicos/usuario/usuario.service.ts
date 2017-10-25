import { UsuarioInterface } from './usuario.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Esta classe fornece o serviço UsuarioServico com métodos para 
 */
@Injectable()
export class UsuarioService {

  private _url = 'http://localhost:8080/compromissoapp-0.0.1-SNAPSHOT/rs/usuarios';
  private SEPARADOR: string = '/';

  /**
   * Cria um novo UsuarioService com o injected Http.
   * @param {Http} http - O injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  /**
   * Retorna um Observable para a solicitação HTTP GET para o recurso JSON.
   * @return {string[]} O Observable para o HTTP request.
   */
  getListaUsuarios(): Observable<UsuarioInterface[]> {
    return this.http
      .get(this._url)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getUsuario(pk: string): Observable<UsuarioInterface> {
    return this.http
      .get(this._url.concat(this.SEPARADOR).concat(pk))
      .map(res => res.json())
      .catch(this.handleError);
  }

  alterar(pk: string, usuario: UsuarioInterface): Observable<UsuarioInterface> {
    return this.http
      .put(this._url.concat(this.SEPARADOR).concat(pk), usuario)
      .catch(this.handleError);
  }

  incluir(usuario: UsuarioInterface): Observable<UsuarioInterface> {
    return this.http
      .post(this._url, usuario)
      .catch(this.handleError);
  }

  excluir(pk: string): Observable<UsuarioInterface> {
    return this.http
      .delete(this._url.concat(this.SEPARADOR).concat(pk))
      .catch(this.handleError);
  }

  /**
    * Lida com o erro HTTP.
    */
  private handleError(error: any) {
    // Em um aplicativo do mundo real, podemos usar uma infraestrutura de log remota
    // Também cavar mais fundo no erro para obter uma mensagem melhor
    let errMsg = error.message
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : 'Erro do servidor';
    console.error(errMsg); // faça log no console em vez disso.
    return Observable.throw(errMsg);
  }
}

export interface UsuarioInterface {
  pk: string;
  nome: string;
  email: string;
  login: string;
  senha: string;
  situacao: boolean;
}