import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';

import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css'],
})
export class MostrarComponent implements OnInit {
  constructor(private service: FinancaService, private router: Router) {}

  lancamento: Lancamento[] = [];

  delete(lanca: Lancamento) {
    this.service.delete(lanca).subscribe((data) => {
      this.lancamento = this.lancamento.filter((l) => l !== lanca);
      alert('deletado!');
    });
  }

  update(lanca: Lancamento): void {
    localStorage.setItem('id', lanca.id.toString());
    this.router.navigate(['editar']);
  }

  ngOnInit() {
    this.service.getLancamento().subscribe((data) => (this.lancamento = data));
  }
}
