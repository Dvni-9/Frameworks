import { Component, input, output } from '@angular/core';
import { Tarea } from '../../modelos/tarea.model';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  imports: [],
  template: `
    <div class="tarjeta-tarea" [class.completada]="tarea().completada">
      <div class="tarea-contenido">
        <input 
          type="checkbox" 
          [checked]="tarea().completada" 
          (change)="onAlternar.emit(tarea().id)" 
        />
        <span class="texto-tarea">{{ tarea().texto }}</span>
      </div>
      <button class="btn-borrar" (click)="onEliminar.emit(tarea().id)">Eliminar</button>
    </div>
  `,
  styles: [`
    .tarjeta-tarea {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }

    .tarjeta-tarea.completada {
      background-color: #f8fafc;
      border-color: #cbd5e1;
    }

    .tarea-contenido {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .tarea-contenido input[type="checkbox"] {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .texto-tarea {
      color: #1e293b;
      font-size: 1rem;
    }

    .completada .texto-tarea {
      text-decoration: line-through;
      color: #94a3b8;
    }

    .btn-borrar {
      background-color: #ef4444;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      font-size: 0.85rem;
      transition: background-color 0.2s;
    }

    .btn-borrar:hover {
      background-color: #dc2626;
    }
  `]
})
export class TareaItemComponent {
  tarea = input.required<Tarea>();
  onEliminar = output<number>();
  onAlternar = output<number>();
}
