import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {VideojuegoComponent} from './Videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent // Declaramos el componente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Usamos la terminal para crear un componente de forma skafoldin (automatico)
// $ ng generate component cursos
