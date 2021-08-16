import { HttpClient, HttpParams } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { salas } from './salas';

@Component({
  selector: 'solapa2',
  templateUrl: './solapa2.component.html',
  styleUrls: ['./solapa2.component.css']
})
export class Solapa2Component implements OnInit {
  sub: any;
  salas = salas;
  salasProcesadas: Array<String>;
  sala: number;
  butacasLibres: String;
  idPelicula: Number;
  butacasActuales: String;
  url = 'localhost:3000/';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  reservar(butaca) {
    this.http.get(
      this.url + stringify(this.idPelicula) + 'reservar' + '1' + butaca
    );
  }

  ngOnInit() {
    this.salasProcesadas;
    let playStore = [];
    salas.forEach(function(i) {
      playStore.push(
        i.butacas
          .replace('[', '')
          .split('"')
          .join('')
          .split(' ')
          .join('')
          .replace(']', '')
          .split(',')
      );
    });
    this.salasProcesadas = playStore;

    this.sub = this.route.params.subscribe(params => {
      this.sala = params.sala;
      this.butacasLibres = params.butacas
        .replace('[', '')
        .split('"')
        .join('')
        .split(' ')
        .join('')
        .replace(']', '')
        .split(',');
      this.idPelicula = params.id;
      this.butacasActuales = this.salasProcesadas[this.sala - 1];
    });
  }
}
