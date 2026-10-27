import { Routes } from '@angular/router';
import { ListaJuegosComponent } from './components/lista-juegos/lista-juegos.component';
import { DetalleJuegoComponent } from './components/detalle-juego/detalle-juego.component';

export const routes: Routes = [
  // 1. Redirección inicial
  { path: '', redirectTo: 'juegos', pathMatch: 'full' },
  // 2. Ruta principal (Catálogo)
  { path: 'juegos', component: ListaJuegosComponent },
  // 3. Ruta detalle con parámetro dinámico
  { path: 'juegos/:id', component: DetalleJuegoComponent },
  // 4. Ruta comodín 404
  { path: '**', redirectTo: 'juegos' }
];
