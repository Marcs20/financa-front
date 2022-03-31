import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Lancamento } from '../model/lancamento';
import { FinancaService } from '../service/financa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public service1: FinancaService, private router: Router) {}

  lancamento: Lancamento[] = [];
  lancamento2: Lancamento[] = [];

  getValor() {
    let total = 0;
    for (let i = 0; i < this.lancamento.length; i++) {
      total = total + this.lancamento[i].valor;
    }
    return total;
  }

  getRes() {
    let total = 0;
    for (let i = 0; i < this.lancamento2.length; i++) {
      total = total + this.lancamento2[i].valor;
    }
    return total - this.getValor();
  }

  ngOnInit() {
    this.service1.getLancamento().subscribe((data) => (this.lancamento = data));
    this.service1
      .getLancamento2()
      .subscribe((data) => (this.lancamento2 = data));
  }
}
