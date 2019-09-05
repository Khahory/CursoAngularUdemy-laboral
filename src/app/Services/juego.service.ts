//  Lo primero es importar el inyectable
import {Injectable} from '@angular/core';
import {Juego} from '../Models/Juego';

@Injectable() // Nos permitira implementar el inyectable en varias clases, asi no tenemos que invocarlo en cada momento
export class JuegoService {
  private juegos: Array<Juego>;

  constructor() {
    //  Arreglo con objetos dentro
    this.juegos = [
      new Juego('GTA', 100, 'RochStar'),
      new Juego('GTA', 200, 'RochStar'),
      new Juego('SSMB', 80, 'Nintendo'),
      new Juego('Samus', 5, 'Nintendo'),
    ];
  }

  getJuegos(): Array<Juego> {
    return this.juegos;
  }
}
