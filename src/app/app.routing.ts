// Importar modulos del router
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Importar componente
import {HomeComponent} from './Component/home/home.component';
import {VideojuegoComponent} from './Component/Videojuego/videojuego.component';
import {CursosComponent} from './Component/cursos/cursos.component';
import {ExternoComponent} from './Component/externo/externo.component';
import {ContactoComponent} from './Component/contacto/contacto.component';

// Array de rutas
const appRouter: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'juegos', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:seguidores', component: CursosComponent}, // Constructor con dos parametros en cursos
  {path: 'externo', component: ExternoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

// Exportar el modulo de router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);
