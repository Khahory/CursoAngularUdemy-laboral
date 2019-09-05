import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {VideojuegoComponent} from './Videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import {CalculadoraPipe} from './pipes/Calculadora.pipe'; // Importando el pipe

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent, // Declaramos el componente
    CalculadoraPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Usamos la terminal para crear un componente de forma skafoldin (automatico)
// $ ng generate component cursos
