import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { EstadoService } from "./services/estado.service";
import { ListarEstadoComponent } from "./listar-estado/listar-estado.component";
import { InserirEstadoComponent } from "./inserir-estado/inserir-estado.component";
import { EditarEstadoComponent } from "./editar-estado/editar-estado.component";

import { SharedModule } from "../shared";

import { NgxMaskModule, IConfig } from "ngx-mask";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
  providers: [EstadoService],
})
export class EstadoModule {}
