import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { PrincipalModule } from './principal/principal.module';
import { UsuarioModule } from './usuario/usuario.module';

import { DashboardComponent } from './dashboard.component';

import { NavBarComponent } from '../compartilhado/index';
import { BarraLateralComponent } from '../compartilhado/index';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2BootstrapModule.forRoot(),
    PrincipalModule,
    UsuarioModule
  ],
  declarations: [DashboardComponent, NavBarComponent, BarraLateralComponent],
  exports: [DashboardComponent, NavBarComponent, BarraLateralComponent]
})
export class DashboardModule {}
