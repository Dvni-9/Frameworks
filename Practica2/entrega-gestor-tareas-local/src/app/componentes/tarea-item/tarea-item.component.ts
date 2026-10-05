import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  imports: [],
  template: `
    <div class="tarjeta-tarea">
      <span class="texto-tarea">{{ tarea() }}</span>
      <button class="btn-borrar" (click)="onBorrarClicked()">Eliminar</button>
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
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }

    .texto-tarea {
      color: #1e293b;
      font-size: 1rem;
    }

    .btn-borrar {
      background-color: #ef4444;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.2s;
    }

    .btn-borrar:hover {
      background-color: #dc2626;
    }
  `]
})
export class TareaItemComponent {
  tarea = input.required<string>();
  index = input.required<number>();
  onEliminar = output<number>();

  onBorrarClicked() {
    this.onEliminar.emit(this.index());
  }
}
