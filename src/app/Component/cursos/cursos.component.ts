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
  private nombre: string;
  private seguidores: number;
  private activo: boolean;

  // tslint:disable-next-line:variable-name
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.activo = false;
    this.titulo = 'Componente cursos';
    // Obtener los valores que estan llegando por la URL

    // @ts-ignore
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.seguidores = params.seguidores;
      console.log(params);
    });
  }

  private goGame() {
    this._router.navigate(['/juegos']);
  }

  // Uso del ngTemplate
  private identificarme() {
    this.activo = true;
  }

}
