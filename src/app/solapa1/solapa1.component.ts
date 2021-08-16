import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { peliculas } from './funciones';

@Component({
  selector: 'solapa1',
  templateUrl: './solapa1.component.html',
  styleUrls: ['./solapa1.component.css']
})
export class Solapa1Component {
  peliculas = peliculas;
  name = "si";


  vigencia(si: Number) {
    if(si == 1){
      return "Pelicula disponible"
    }
    else{
      return "Pelicula no disponible"
    }
  }

  constructor(private router: Router) { }

  navigate(id, sala, butacas ) {
    this.router.navigate(['reservas', id, sala, butacas]);
  }

}
