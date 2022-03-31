import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ChartDta } from '../model/chart-dta';

@Injectable()
export class ChartService {
  constructor(private http: HttpClient) {}

  url = 'https://aplica1.herokuapp.com/lancamento';
  listChart: Array<ChartDta> = [];

  chartData() {
    return this.http.get<ChartDta>(this.url).pipe((data) => data);
  }
}
