import { Injectable } from '@angular/core';
import { Pessoa } from "src/app/shared";

const LS_CHAVE: string = 'pessoas';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor() {}

  listarTodos(): Pessoa[] {
    const pessoas = localStorage.getItem(LS_CHAVE);
    if (pessoas) {
      return JSON.parse(pessoas);
    }
    return [];
  }

  inserir(pessoa: Pessoa): void {
    const pessoas = this.listarTodos();
    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);
    localStorage.setItem(LS_CHAVE, JSON.stringify(pessoas));
  }

  buscarPorId(id: number): Pessoa | undefined {
    const pessoas: Pessoa[] = this.listarTodos();
    return pessoas.find((p) => p.id === id);
  }

  atualizar(pessoa: Pessoa): void {
    const pessoas = this.listarTodos();
    pessoas.forEach((obj, index, objs) => {
      if (obj.id === pessoa.id) {
        objs[index] = pessoa;
      }
    });
    localStorage.setItem(LS_CHAVE, JSON.stringify(pessoas));
  }

  remover(id: number): void {
    let pessoas = this.listarTodos();
    pessoas = pessoas.filter((p) => p.id !== id);
    localStorage.setItem(LS_CHAVE, JSON.stringify(pessoas));
  }
}
