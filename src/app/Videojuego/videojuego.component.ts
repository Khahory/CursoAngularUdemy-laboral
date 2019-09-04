// Primero importamos el componente
import {Component, OnInit} from '@angular/core';
import {Juego} from '../Modules/Juego';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'videojuego',
  templateUrl: 'videojuego.component.html'
})
export class VideojuegoComponent implements OnInit {
  private titulo: string;
  private listado: string;
  private juegos: Array<Juego>;
  private color: string;
  private newJuego: string;
  private nameJuegos: string[];
  private indexJuegos: number[];

  constructor() {
    // Variables
    this.color = 'blue';
    this.titulo = 'Componente de Videojuego (dinamico)';
    this.listado = 'Listado de los mas populares (dinamico)';
    this.newJuego = 'Zelda';
    this.nameJuegos = [];
    this.indexJuegos = [];
    // console.log('Se cargo mi primero componente');

    //  Arreglo con objetos dentro
    this.juegos = [
      new Juego('GTA', 100, 'RochStar'),
      new Juego('GTA', 200, 'RochStar'),
      new Juego('SSMB', 80, 'Nintendo'),
      new Juego('Samus', 5, 'Nintendo'),
    ];
    // console.log(this.juegos);
    this.getGames();

  }
  // Hooks, evento para cuando se inicia el componente (despues del constructor)
  ngOnInit(): void {
    // console.log('Soy el OnInit del compoente');
  }
//  Push a la lista de los juegos
  private getGames() {
  //  foreah
    this.juegos.forEach((valor, index) => {
      // En caso de que el indice de dos sea diferente
      if (this.nameJuegos.indexOf(valor.nombre) < 0) {
        this.nameJuegos.push(valor.nombre);
        this.indexJuegos.push(index);
      }
    });
  }

  private pushGame() {
    this.nameJuegos.push(this.newJuego);
  }

//  Eliminar elemento
  deleteNameGame(indice: number) {
    this.nameJuegos.splice(indice, 1);
  }
//  End - Eliminar elemento
}
