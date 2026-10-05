import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private _tareas = signal<string[]>([
    'Aprender componentes standalone en Angular',
    'Configurar el flujo de input y output',
    'Dominar la inyección de dependencias con inject()'
  ]);

  readonly tareas = this._tareas.asReadonly();

  agregarTarea(nuevaTarea: string) {
    if (nuevaTarea.trim() === '') return;
    this._tareas.update(listaActual => [...listaActual, nuevaTarea]);
  }

  eliminarTarea(index: number) {
    this._tareas.update(listaActual => listaActual.filter((_, i) => i !== index));
  }
}
