// Primero importamos el componente
import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'videojuego',
  templateUrl: 'videojuego.component.html'
})
export class VideojuegoComponent {
  private titulo:string;
  private listado:string;
  constructor() {
    this.titulo = 'Componente de Videojuego (dinamico)';
    this.listado = 'Listado de los mas populares (dinamico)';
    console.log('Se cargo mi primero componente');
  }
}
