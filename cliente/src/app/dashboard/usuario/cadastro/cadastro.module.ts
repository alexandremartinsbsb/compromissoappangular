import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { CadastroComponent } from './cadastro.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    Ng2BootstrapModule.forRoot(),
    HttpModule
  ],
  declarations: [CadastroComponent],
  exports: [CadastroComponent]
})
export class CadastroModule {}
