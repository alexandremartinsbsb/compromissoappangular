import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-cmp',
  templateUrl: 'usuario.component.html'
})
export class UsuarioComponent {
  @Input() pk;
  @Input() nome;
  @Input() email;
  @Input() login;
  @Input() senha;
  @Input() situacao;
}
