// Primero importamos el componente
import {Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import {Juego} from '../Modules/Juego';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'videojuego',
  templateUrl: 'videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, OnDestroy, DoCheck {
  private titulo: string;
  private listado: string;
  private juegos: Array<Juego>;

  constructor() {
    this.titulo = 'Componente de Videojuego (dinamico)';
    this.listado = 'Listado de los mas populares (dinamico)';
    // console.log('Se cargo mi primero componente');

    //  Arreglo con objetos dentro
    this.juegos = [
      new Juego('GTA', 100, 'RochStar'),
      new Juego('SSMB', 80, 'Nintendo'),
      new Juego('Samus', 5, 'Nintendo'),
    ];
    console.log(this.juegos);
  }
  // Hooks, evento para cuando se inicia el componente (despues del constructor)
  ngOnInit(): void {
    // console.log('Soy el OnInit del compoente');
  }
  // Hooks, evento para cuando cambia algo dentro de componente
  ngDoCheck(): void {
    // console.log('Soy DoCheck del componente, estoy donde encuentre cambios XDXD');
  }
  // Hooks, evento para cuando se destruye un componente
  ngOnDestroy(): void {
    // console.log('Soy OnDestroy del componente');
  }
}
