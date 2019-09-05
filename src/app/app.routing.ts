// Importar modulos del router
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar componente
import {HomeComponent} from './home/home.component';
import {VideojuegoComponent} from './Videojuego/videojuego.component';
import {CursosComponent} from './cursos/cursos.component';

// Array de rutas
const appRouter: Routes = [
  {path: '', component: HomeComponent},
  {path: 'juegos', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: '**', component: HomeComponent}
];

// Exportar el modulo de router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);
