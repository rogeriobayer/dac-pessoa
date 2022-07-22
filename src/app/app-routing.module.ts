import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InserirPessoaComponent } from "./pessoa/inserir-pessoa/inserir-pessoa.component";
import { ListarPessoaComponent } from "./pessoa/listar-pessoa/listar-pessoa.component";
import { EditarPessoaComponent } from "./pessoa/editar-pessoa/editar-pessoa.component";
import { ListarEnderecoComponent } from "./endereco/listar-endereco/listar-endereco.component";
import { EditarEnderecoComponent } from "./endereco/editar-endereco/editar-endereco.component";
import { InserirEnderecoComponent } from "./endereco/inserir-endereco/inserir-endereco.component";
import { ListarCidadeComponent } from "./cidade/listar-cidade/listar-cidade.component";
import { EditarCidadeComponent } from "./cidade/editar-cidade/editar-cidade.component";
import { InserirCidadeComponent } from "./cidade/inserir-cidade/inserir-cidade.component";
import { ListarEstadoComponent } from "./estado/listar-estado/listar-estado.component";
import { EditarEstadoComponent } from "./estado/editar-estado/editar-estado.component";
import { InserirEstadoComponent } from "./estado/inserir-estado/inserir-estado.component";
import { LoginRoutes } from "./auth/auth-routing.module";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { role: "ADMIN,GERENTE,FUNC" },
  },
  {
    path: "pessoas",
    children: [
      {
        path: "listar",
        component: ListarPessoaComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,GERENTE,FUNC" },
      },
      {
        path: "editar/:id",
        component: EditarPessoaComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,GERENTE,FUNC" },
      },
      {
        path: "novo",
        component: InserirPessoaComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,GERENTE,FUNC" },
      },
    ],
  },
  {
    path: "enderecos",
    children: [
      {
        path: "listar",
        component: ListarEnderecoComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,GERENTE" },
      },
      {
        path: "editar/:id",
        component: EditarEnderecoComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,GERENTE" },
      },
      {
        path: "novo",
        component: InserirEnderecoComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,GERENTE" },
      },
    ],
  },
  {
    path: "cidades",
    children: [
      {
        path: "listar",
        component: ListarCidadeComponent,
        canActivate: [AuthGuard],
        data: { role: "GERENTE" },
      },
      {
        path: "editar/:id",
        component: EditarCidadeComponent,
        canActivate: [AuthGuard],
        data: { role: "GERENTE" },
      },
      {
        path: "novo",
        component: InserirCidadeComponent,
        canActivate: [AuthGuard],
        data: { role: "GERENTE" },
      },
    ],
  },
  {
    path: "estados",
    children: [
      {
        path: "listar",
        component: ListarEstadoComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,FUNC" },
      },
      {
        path: "editar/:id",
        component: EditarEstadoComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,FUNC" },
      },
      {
        path: "novo",
        component: InserirEstadoComponent,
        canActivate: [AuthGuard],
        data: { role: "ADMIN,FUNC" },
      },
    ],
  },
  ...LoginRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
