import { Component, inject, signal, computed } from '@angular/core';
import { TareasService } from './servicios/tareas.service';
import { TareaItemComponent } from './componentes/tarea-item/tarea-item.component';

export type Filtro = 'todas' | 'pendientes' | 'completadas';

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
  total = this.tareasService.total;
  completadas = this.tareasService.completadas;
  pendientes = this.tareasService.pendientes;

  filtro = signal<Filtro>('todas');
  nuevaTareaInput = signal('');

  tareasFiltradas = computed(() => {
    const f = this.filtro();
    const tareas = this.listaTareas();

    if (f === 'pendientes') return tareas.filter(t => !t.completada);
    if (f === 'completadas') return tareas.filter(t => t.completada);
    return tareas;
  });

  actualizarTexto(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nuevaTareaInput.set(input.value);
  }

  agregar() {
    const texto = this.nuevaTareaInput().trim();
    if (!texto) return;

    this.tareasService.agregarTarea(texto);
    this.nuevaTareaInput.set('');
  }

  borrar(id: number) {
    this.tareasService.eliminarTarea(id);
  }

  alternar(id: number) {
    this.tareasService.alternarTarea(id);
  }

  cambiarFiltro(nuevoFiltro: Filtro) {
    this.filtro.set(nuevoFiltro);
  }

  limpiarCompletadas() {
    this.tareasService.limpiarCompletadas();
  }
}
