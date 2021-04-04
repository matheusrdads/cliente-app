import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientesFormComponent
  ],
  imports: [
    CommonModule,           //modulo de funcionalidades padrão do angula
    ClientesRoutingModule,   //importação necessessária para as rotas funcionarem
    FormsModule
  ],
  exports: [
    ClientesFormComponent
  ]
})
export class ClientesModule { }
