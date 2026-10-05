import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicManagerComponent } from './comic-manager.component';

describe('ComicManagerComponent', () => {
  let component: ComicManagerComponent;
  let fixture: ComponentFixture<ComicManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicManagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicManagerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('updates the stock and marks a comic as sold out', () => {
    const firstCard = fixture.nativeElement.querySelector('[style]') as HTMLElement;
    const sellButton = firstCard.querySelectorAll('button')[1] as HTMLButtonElement;

    sellButton.click();
    fixture.detectChanges();
    sellButton.click();
    fixture.detectChanges();
    sellButton.click();
    fixture.detectChanges();

    expect(firstCard.textContent).toContain('¡AGOTADO!');
    expect(sellButton.disabled).toBe(true);
  });

  it('switches between detailed and compact views', () => {
    const toggleButton = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    toggleButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ul')).not.toBeNull();
    expect(fixture.nativeElement.querySelector('[style]')).toBeNull();

    toggleButton.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('h3')).toHaveLength(3);
  });

  it('shows the empty state after clearing the warehouse', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    const clearButton = buttons[buttons.length - 1] as HTMLButtonElement;

    clearButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No hay cómics registrados en el inventario.');
    expect(component.comics()).toEqual([]);
  });
});
