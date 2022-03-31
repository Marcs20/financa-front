import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';
import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-mostrarreceita',
  templateUrl: './mostrarreceita.component.html',
  styleUrls: ['./mostrarreceita.component.css'],
})
export class MostrarreceitaComponent implements OnInit {
  constructor(private service: FinancaService, private router: Router) {}

  lancamento: Lancamento[] = [];

  delete(lanca: Lancamento) {
    this.service.delete2(lanca).subscribe((data) => {
      this.lancamento = this.lancamento.filter((l) => l !== lanca);
      alert('deletado!');
    });
  }

  update(lanca: Lancamento): void {
    localStorage.setItem('id', lanca.id.toString());
    this.router.navigate(['editarreceita']);
  }

  ngOnInit() {
    this.service.getLancamento2().subscribe((data) => (this.lancamento = data));
  }
}
