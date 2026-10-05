import { Injectable, signal, computed, effect } from '@angular/core';
import { Tarea } from '../modelos/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareasIniciales: Tarea[] = [
    { id: 1, texto: 'Aprender componentes standalone en Angular', completada: true },
    { id: 2, texto: 'Configurar el flujo de input y output', completada: false },
    { id: 3, texto: 'Dominar la inyección de dependencias con inject()', completada: false }
  ];

  private _tareas = signal<Tarea[]>(this.cargarTareas());

  readonly tareas = this._tareas.asReadonly();

  readonly total = computed(() => this._tareas().length);
  readonly completadas = computed(() => this._tareas().filter(t => t.completada).length);
  readonly pendientes = computed(() => this._tareas().filter(t => !t.completada).length);

  constructor() {
    effect(() => {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('tareas_angular', JSON.stringify(this._tareas()));
      }
    });
  }

  private cargarTareas(): Tarea[] {
    if (typeof window !== 'undefined' && window.localStorage) {
      const datos = localStorage.getItem('tareas_angular');
      if (datos) {
        try {
          return JSON.parse(datos);
        } catch {
          return this.tareasIniciales;
        }
      }
    }
    return this.tareasIniciales;
  }

  agregarTarea(texto: string) {
    if (!texto.trim()) return;

    const nuevaTarea: Tarea = {
      id: Date.now(),
      texto: texto.trim(),
      completada: false
    };

    this._tareas.update(lista => [...lista, nuevaTarea]);
  }

  alternarTarea(id: number) {
    this._tareas.update(lista =>
      lista.map(t => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  }

  eliminarTarea(id: number) {
    this._tareas.update(lista => lista.filter(t => t.id !== id));
  }

  limpiarCompletadas() {
    this._tareas.update(lista => lista.filter(t => !t.completada));
  }
}
