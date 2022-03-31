import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from '../model/lancamento';

@Injectable()
export class FinancaService {
  constructor(private http: HttpClient) {}

  url = 'https://aplica1.herokuapp.com/lancamento';

  lancamento: Lancamento[] = [];

  getLancamento() {
    return this.http.get<Lancamento[]>(this.url);
  }

  getID(id: number) {
    return this.http.get<Lancamento>(this.url + '/' + id);
  }

  update(lanca: Lancamento) {
    return this.http.put<Lancamento>(this.url + '/' + lanca.id, lanca);
  }

  add(lanca: Lancamento) {
    return this.http.post<Lancamento>(this.url, lanca);
  }

  delete(lanca: Lancamento) {
    return this.http.delete<Lancamento>(this.url + '/' + lanca.id);
  }

  url2 = 'https://aplica1.herokuapp.com/receita';

  lancamento2: Lancamento[] = [];

  getLancamento2() {
    return this.http.get<Lancamento[]>(this.url2);
  }

  getID2(id: number) {
    return this.http.get<Lancamento>(this.url2 + '/' + id);
  }

  update2(lanca: Lancamento) {
    return this.http.put<Lancamento>(this.url2 + '/' + lanca.id, lanca);
  }

  add2(lanca: Lancamento) {
    return this.http.post<Lancamento>(this.url2, lanca);
  }

  delete2(lanca: Lancamento) {
    return this.http.delete<Lancamento>(this.url2 + '/' + lanca.id);
  }
}
