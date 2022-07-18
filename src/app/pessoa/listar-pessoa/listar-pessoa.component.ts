import { Component, OnInit } from "@angular/core";

import { PessoaService } from "../services/pessoa.service";
import { Pessoa } from 'src/app/shared';

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalPessoaComponent } from "../modal-pessoa/modal-pessoa.component";

@Component({
  selector: "app-listar-pessoa",
  templateUrl: "./listar-pessoa.component.html",
  styleUrls: ["./listar-pessoa.component.css"],
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos() {
    return this.pessoaService.listarTodos();

    // return [ new Pessoa(1, 'João', 22), new Pessoa(2, 'Maria', 23), new Pessoa(3, 'José', 24), new Pessoa(4, 'Pedro', 25) ];
  }

  abrirModalPessoa(pessoa: Pessoa) {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }

  remover($event: any, pessoa: Pessoa) {
    $event.preventDefault();
    if (confirm("Remover pessoa?")) {
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.listarTodos();
    }
  }
}
