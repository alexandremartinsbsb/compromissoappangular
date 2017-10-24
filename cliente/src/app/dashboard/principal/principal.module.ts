import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [
    PrincipalComponent
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PrincipalModule {}
