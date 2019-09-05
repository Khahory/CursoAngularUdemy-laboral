import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import {VideojuegoComponent} from './Videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    HomeComponent // Declaramos el componente
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Usamos la terminal para crear un componente de forma skafoldin (automatico)
// $ ng generate component cursos
