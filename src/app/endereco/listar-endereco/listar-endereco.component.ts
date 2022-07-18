import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/shared';
import { EnderecoService } from '../services/endereco.service';

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalEnderecoComponent } from "../modal-endereco/modal-endereco.component";


@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.enderecos = this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco){
    $event.preventDefault();
    if(confirm("Deseja remover o endereco " + endereco.rua + ", " + endereco.numero + "?")){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.enderecoService.listarTodos();
    }
  }

  abrirModal(endereco: Endereco){
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }
}
