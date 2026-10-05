import { Component, input, output } from '@angular/core';
import { Juego } from '../../modelos/juego.model';

@Component({
  selector: 'app-juego-item',
  standalone: true,
  template: `
    <div class="juego">
      <div class="info">
        <strong>{{ juego().titulo }}</strong> ({{ juego().anio }})
        <div>{{ juego().plataforma }} - {{ juego().tipo }}</div>
        <div>{{ juego().esPrincipal ? 'Saga Principal' : 'Spin-off' }}</div>
      </div>
      <button
        type="button"
        class="btn-eliminar"
        [attr.aria-label]="'Eliminar ' + juego().titulo"
        (click)="eliminar()">
        Eliminar
      </button>
    </div>
  `,
  styles: [`
    .juego {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin-bottom: 8px;
      background: white;
      border: 1px solid #ccc;
    }
    .info div {
      margin-top: 4px;
      color: #555;
      font-size: 13px;
    }
    .btn-eliminar {
      padding: 6px 10px;
      color: white;
      background: #d9534f;
      border: 1px solid #ac2925;
      cursor: pointer;
    }
    .btn-eliminar:hover {
      background: #c9302c;
    }
  `]
})
export class JuegoItemComponent {
  juego = input.required<Juego>();
  onEliminar = output<number>();

  eliminar() {
    this.onEliminar.emit(this.juego().id);
  }
}
