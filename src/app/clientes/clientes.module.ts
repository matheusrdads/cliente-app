import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';


@NgModule({
  declarations: [
    ClientesFormComponent
  ],
  imports: [
    CommonModule,           //modulo de funcionalidades padrão do angula
    ClientesRoutingModule   //importação necessessária para as rotas funcionarem
  ],
  exports: [
    ClientesFormComponent
  ]
})
export class ClientesModule { }
