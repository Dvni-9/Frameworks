import { Component, inject, signal } from '@angular/core';
import { JuegosService } from './servicios/juegos.service';
import { JuegoItemComponent } from './componentes/juego-item/juego-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JuegoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private juegosService = inject(JuegosService);
  juegos = this.juegosService.juegos;

  totalJuegos = this.juegosService.totalJuegos;
  totalPrincipales = this.juegosService.totalPrincipales;
  totalSpinOffs = this.juegosService.totalSpinOffs;

  tituloInput = signal('');
  plataformaInput = signal('');
  tipoInput = signal('Plataformas');
  esPrincipalInput = signal(true);

  actualizarTitulo(valor: string) {
    this.tituloInput.set(valor);
  }

  actualizarPlataforma(valor: string) {
    this.plataformaInput.set(valor);
  }

  actualizarTipo(valor: string) {
    this.tipoInput.set(valor);
  }

  actualizarEsPrincipal(valor: string) {
    this.esPrincipalInput.set(valor === 'true');
  }

  agregarJuego() {
    const titulo = this.tituloInput().trim();
    const plataforma = this.plataformaInput().trim();

    if (!titulo || !plataforma) {
      return;
    }

    this.juegosService.agregarJuego({
      titulo,
      plataforma,
      anio: new Date().getFullYear(),
      esPrincipal: this.esPrincipalInput(),
      tipo: this.tipoInput()
    });

    this.tituloInput.set('');
    this.plataformaInput.set('');
  }

  borrarJuego(id: number) {
    this.juegosService.eliminarJuego(id);
  }
}
