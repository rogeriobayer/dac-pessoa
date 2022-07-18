import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PessoaService } from "./services/pessoa.service";
import { ListarPessoaComponent } from "./listar-pessoa/listar-pessoa.component";
import { InserirPessoaComponent } from "./inserir-pessoa/inserir-pessoa.component";
import { EditarPessoaComponent } from "./editar-pessoa/editar-pessoa.component";

import { SharedModule } from "../shared";

import { NgxMaskModule, IConfig } from "ngx-mask";
import { ModalPessoaComponent } from "./modal-pessoa/modal-pessoa.component";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarPessoaComponent,
    InserirPessoaComponent,
    EditarPessoaComponent,
    ModalPessoaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
  providers: [PessoaService],
})
export class PessoaModule {}
