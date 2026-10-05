import { Component, inject, signal } from '@angular/core';
import { TareasService } from './servicios/tareas.service';
import { TareaItemComponent } from './componentes/tarea-item/tarea-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TareaItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private tareasService = inject(TareasService);

  listaTareas = this.tareasService.tareas;

  nuevaTareaInput = signal('');

  actualizarTexto(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.nuevaTareaInput.set(valor);
  }

  agregar() {
    this.tareasService.agregarTarea(this.nuevaTareaInput());
    this.nuevaTareaInput.set('');
  }

  borrar(index: number) {
    this.tareasService.eliminarTarea(index);
  }
}
