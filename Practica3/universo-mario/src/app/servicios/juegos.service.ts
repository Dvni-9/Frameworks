import { Injectable, signal } from '@angular/core';
import { Juego } from '../modelos/juego.model';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private _juegos = signal<Juego[]>([
    { id: 1, titulo: 'Super Mario Bros.', plataforma: 'NES', anio: 1985, esPrincipal: true, tipo: 'Plataformas' },
    { id: 2, titulo: 'Super Mario World', plataforma: 'SNES', anio: 1990, esPrincipal: true, tipo: 'Plataformas' },
    { id: 3, titulo: 'Super Mario 64', plataforma: 'Nintendo 64', anio: 1996, esPrincipal: true, tipo: 'Plataformas' },
    { id: 4, titulo: 'Mario Kart 8 Deluxe', plataforma: 'Nintendo Switch', anio: 2017, esPrincipal: false, tipo: 'Kart' },
    { id: 5, titulo: 'Super Mario Odyssey', plataforma: 'Nintendo Switch', anio: 2017, esPrincipal: true, tipo: 'Plataformas' },
    { id: 6, titulo: 'Super Mario RPG', plataforma: 'SNES', anio: 1996, esPrincipal: false, tipo: 'RPG' }
  ]);

  readonly juegos = this._juegos.asReadonly();
}
