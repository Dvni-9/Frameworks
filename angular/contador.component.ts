import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  // El contador empieza en 0
  contador: number = 0;

  // Método para sumar 1
  sumar(): void {
    this.contador++;
  }

  // Método para restar 1
  restar(): void {
    this.contador--;
  }
}
