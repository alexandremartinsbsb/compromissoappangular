import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';

import { ListagemComponent } from './listagem.component';
import { ModalComponent } from './../../../compartilhado/modal/modal.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    Ng2BootstrapModule.forRoot(),
    HttpModule
  ],
  declarations: [ListagemComponent, ModalComponent],
  exports: [ListagemComponent],
  entryComponents: [ModalComponent]
})
export class ListagemModule {}
