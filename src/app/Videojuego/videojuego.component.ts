// Primero importamos el componente
import {Component, OnInit} from '@angular/core';
import {JuegoService} from '../Services/juego.service';
import {Juego} from '../Models/Juego';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'videojuego',
  templateUrl: 'videojuego.component.html',
  providers: [ // Le decimos que es un servicio de juego
    JuegoService
  ]
})
export class VideojuegoComponent implements OnInit {
  private titulo: string;
  private listado: string;
  private color: string;
  private newJuego: string;
  private nameJuegos: string[];
  private indexJuegos: number[];
  private juegos: Array<Juego>;

  // Para utilizar el service debemos ponerlo en el constructor (parametro)
  // tslint:disable-next-line:variable-name
  constructor(private _juegoService: JuegoService) {
    // Variables
    this.color = 'blue';
    this.titulo = 'Componente de Videojuego (dinamico)';
    this.listado = 'Listado de los mas populares (dinamico)';
    this.newJuego = 'Zelda';
    this.nameJuegos = [];
    this.indexJuegos = [];
  }


  // Hooks, evento para cuando se inicia el componente (despues del constructor)
  ngOnInit(): void {
    // Llamar obtener juegos
    this.juegos = this._juegoService.getJuegos();
    this.getGames();
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
