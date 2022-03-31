import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Lancamento } from '../model/lancamento';
import { ChartService } from '../service/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: ChartService) {}

  lancamento: Lancamento[] = [];

  categoria = [];
  valor = [];

  @ViewChild('myCanvas', { static: true }) elemento: ElementRef;
  @ViewChild('myCanvas2', { static: true }) elemento2: ElementRef;
  ngOnInit() {
    this.service.chartData().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        this.categoria = data[i].categoria;
        this.valor = data[i].valor;
        console.log(this.categoria, this.valor);
      }
    });

    new Chart(this.elemento.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Alimentação', 'Vestimentas', 'Esporte', 'Serviço'],
        datasets: [
          {
            data: [43, 23, 67, 57],
            backgroundColor: ['#0E73F5', 'red', 'green', 'orange'],
          },
        ],
      },
    });
    new Chart(this.elemento2.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Receitas', 'Despesas'],
        datasets: [
          {
            data: [4000, 6000],
            backgroundColor: ['pink', '#0E73F5'],
          },
        ],
      },
    });
  }
}
