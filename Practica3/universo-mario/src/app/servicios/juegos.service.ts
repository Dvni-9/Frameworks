import { Injectable, signal, computed, effect } from '@angular/core';
import { Juego } from '../modelos/juego.model';

const JUEGOS_INICIALES: Juego[] = [
  { id: 1, titulo: 'Super Mario Bros.', plataforma: 'NES', anio: 1985, esPrincipal: true, tipo: 'Plataformas' },
  { id: 2, titulo: 'Super Mario World', plataforma: 'SNES', anio: 1990, esPrincipal: true, tipo: 'Plataformas' },
  { id: 3, titulo: 'Super Mario 64', plataforma: 'Nintendo 64', anio: 1996, esPrincipal: true, tipo: 'Plataformas' },
  { id: 4, titulo: 'Mario Kart 8 Deluxe', plataforma: 'Nintendo Switch', anio: 2017, esPrincipal: false, tipo: 'Kart' },
  { id: 5, titulo: 'Super Mario Odyssey', plataforma: 'Nintendo Switch', anio: 2017, esPrincipal: true, tipo: 'Plataformas' },
  { id: 6, titulo: 'Super Mario RPG', plataforma: 'SNES', anio: 1996, esPrincipal: false, tipo: 'RPG' }
];

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  private readonly STORAGE_KEY = 'mario_catalogo_juegos';

  private _juegos = signal<Juego[]>(this.cargarDeLocalStorage());

  readonly juegos = this._juegos.asReadonly();

  readonly totalJuegos = computed(() => this._juegos().length);
  readonly totalPrincipales = computed(() => this._juegos().filter(j => j.esPrincipal).length);
  readonly totalSpinOffs = computed(() => this._juegos().filter(j => !j.esPrincipal).length);

  constructor() {
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._juegos()));
    });
  }

  private cargarDeLocalStorage(): Juego[] {
    const guardados = localStorage.getItem(this.STORAGE_KEY);
    if (guardados) {
      try {
        return JSON.parse(guardados);
      } catch (e) {
        return JUEGOS_INICIALES;
      }
    }
    return JUEGOS_INICIALES;
  }

  agregarJuego(nuevo: Omit<Juego, 'id'>) {
    const juego: Juego = {
      id: Date.now(),
      ...nuevo
    };
    this._juegos.update(lista => [...lista, juego]);
  }

  eliminarJuego(id: number) {
    this._juegos.update(lista => lista.filter(j => j.id !== id));
  }
}
