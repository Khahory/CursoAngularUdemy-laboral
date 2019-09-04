// Primero importamos el componente
import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'videojuego',
  template: `
  <h2>Componente de Videojuego</h2>
    <ul>
        <li>GTA</li>
        <li>Mario</li>
        <li>Kirby</li>
    </ul>
  `
})
export class VideojuegoComponent {
  constructor() {
    console.log('Se cargo mi primero componente');
  }
}
