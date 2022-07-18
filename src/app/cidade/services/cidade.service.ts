import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared';

const LS_CHAVE = 'cidades';

@Injectable({
  providedIn: 'root'
})
export class CidadeService{

  constructor() { }

  listarTodos(): Cidade[] {
    let cidades = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : []
  }

  inserir(cidade: Cidade): void {
    let cidades = this.listarTodos();
    cidade.id = new Date().getTime();
    
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarPorId(id: number): Cidade | undefined {
    const cidades: Cidade[] = this.listarTodos();
    return cidades.find(cidade => cidade.id == id);
  }

  atualizar(cidade: Cidade): void {
    const cidades: Cidade[] = this.listarTodos();

    cidades.forEach((cidadeObj, cidadeIndex, cidades) => {
      if(cidadeObj.id == cidade.id){
        cidades[cidadeIndex] = cidade;
      }
    })

    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  remover(id: number): void {
    let cidades: Cidade[] = this.listarTodos();
    cidades = cidades.filter(cidade => cidade.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
