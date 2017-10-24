import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * Esta classe fornece o serviço NameList com métodos para ler nomes e adicionar nomes.
 */
@Injectable()
export class NameListService {
  /**
   * Cria um novo NameListService com o injected Http.
   * @param {Http} http - O injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Retorna um Observable para a solicitação HTTP GET para o recurso JSON.
   * @return {string[]} O Observable para o HTTP request.
   */
  get(): Observable<string[]> {
    return this.http
      .get('/assets/data.json')
      .map((res: Response) => res.json())
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
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // faça log no console em vez disso.
    console.log(errMsg); // faça log no console em vez disso.
    return Observable.throw(errMsg);
  }
}
