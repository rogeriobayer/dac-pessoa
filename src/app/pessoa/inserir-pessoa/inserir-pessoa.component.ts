import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { PessoaService } from "../services/pessoa.service";

import { Pessoa } from 'src/app/shared';


@Component({
  selector: "app-inserir-pessoa",
  templateUrl: "./inserir-pessoa.component.html",
  styleUrls: ["./inserir-pessoa.component.css"],
})
export class InserirPessoaComponent implements OnInit {
  constructor(private pessoaService: PessoaService, private router: Router) {}

  @ViewChild("formPessoa") formPessoa!: NgForm;

  pessoa!: Pessoa;

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  inserir(): void{
if(this.formPessoa.form.valid){
  this.pessoaService.inserir(this.pessoa);
  this.router.navigate(["/pessoas"]);
}

  }

}
