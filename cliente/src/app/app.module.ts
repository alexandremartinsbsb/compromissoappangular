import { UsuarioService } from './compartilhado/servicos/usuario/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { LoginModule } from './login/login.module';
import { InscricaoModule } from './inscricao/inscricao.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    LoginModule,
    InscricaoModule,
    DashboardModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule {}
