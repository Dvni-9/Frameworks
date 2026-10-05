import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TareasService } from './servicios/tareas.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [TareasService]
    }).compileComponents();
  });

  it('debería instanciar el componente correctamente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('debería mostrar el título principal', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Gestor de Tareas DAW');
  });

  it('debería añadir una nueva tarea', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const initialCount = app.total();

    app.nuevaTareaInput.set('Practicar Signals');
    app.agregar();
    await fixture.whenStable();

    expect(app.total()).toBe(initialCount + 1);
  });

  it('debería filtrar por tareas completadas', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.cambiarFiltro('completadas');
    await fixture.whenStable();

    const completadas = app.tareasFiltradas();
    expect(completadas.every(t => t.completada)).toBe(true);
  });
});
