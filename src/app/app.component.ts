import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'CursoAngularUdemy lel';
  // tslint:disable-next-line:variable-name
   private mostra_videoJ:boolean = true;
   ocultarVideojuego(value:boolean){
     this.mostra_videoJ = value;
   }
}
