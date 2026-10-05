import { Component } from '@angular/core';
import { ComicManagerComponent } from './comic-manager/comic-manager.component';

@Component({
  selector: 'app-root',
  imports: [ComicManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
}
