import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';

import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css'],
})
export class AdicionarComponent implements OnInit {
  constructor(private router: Router, private service: FinancaService) {}

  lancamentoModel = new Lancamento();

  add() {
    this.service.add(this.lancamentoModel).subscribe((data) => {
      alert(this.lancamentoModel.nome + ' registrado com sucesso');
      this.router.navigate(['mostrar']);
    });
  }

  ngOnInit() {}
}
