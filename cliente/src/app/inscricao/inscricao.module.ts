import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InscricaoComponent } from './inscricao.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [InscricaoComponent],
  exports: [InscricaoComponent]
})
export class InscricaoModule {}
