import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Juego } from '../interfaces/juego.interface';

@Injectable({ providedIn: 'root' })
export class JuegosService {
  private http = inject(HttpClient);
  // Ruta local al JSON con los datos de Mario Bros
  private apiUrl = '/juegos.json';

  // GET: Obtener todo el catálogo
  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.apiUrl);
  }

  // GET: Obtener un juego concreto por ID
  getJuegoPorId(id: number): Observable<Juego> {
    return this.http.get<Juego[]>(this.apiUrl).pipe(
      map((juegos) => {
        const juego = juegos.find((j) => j.id === id);
        if (!juego) {
          throw new Error(`Juego con id ${id} no encontrado`);
        }
        return juego;
      })
    );
  }
}
