import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../../model/lancamento';
import { FinancaService } from '../../service/financa.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  constructor(private router: Router, private service: FinancaService) {}

  lancamento: Lancamento = new Lancamento();

  editar() {
    let id = localStorage.getItem('id');
    this.service.getID(+id).subscribe((data) => {
      this.lancamento = data;
    });
  }

  update() {
    this.service.update(this.lancamento).subscribe((data) => {
      this.lancamento = data;
      alert('Atualizado!');
      this.router.navigate(['mostrar']);
    });
  }

  ngOnInit() {}
}
