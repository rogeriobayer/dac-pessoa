import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { Usuario, Login } from "src/app/shared";

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}
  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }
  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }
}    
