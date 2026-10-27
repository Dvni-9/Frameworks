import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/juego.interface';

@Injectable({ providedIn: 'root' })
export class JuegosService {
  private http = inject(HttpClient);
  // URL del Mock API / JSON Servidor con los datos de Mario Bros
  private apiUrl = '/juegos.json';

  // GET: Obtener todo el catálogo
  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(this.apiUrl);
  }

  // GET: Obtener un juego concreto por ID
  getJuegoPorId(id: number): Observable<Juego> {
    return this.http.get<Juego>(`${this.apiUrl}/${id}`);
  }
}
