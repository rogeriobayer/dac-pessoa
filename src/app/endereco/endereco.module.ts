import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    EditarEnderecoComponent,
    InserirEnderecoComponent,
    ListarEnderecoComponent,
    ModalEnderecoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EnderecoModule { }
