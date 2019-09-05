import { Component, OnInit } from '@angular/core';
// Importamos las librerias de las rutas con parametros
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Subscriber} from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  // Variables
  private titulo: string;
  public nombre: string;
  public seguidores: number;

  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, _router: Router) {}

  ngOnInit() {
    this.titulo = 'Componente cursos';
    // Obtener los valores que estan llegando por la URL

    // @ts-ignore
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.seguidores = params.seguidores;
      console.log(params);
    });
  }

}
