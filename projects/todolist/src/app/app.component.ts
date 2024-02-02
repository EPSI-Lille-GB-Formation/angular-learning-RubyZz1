import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
  imports: [CommonModule, RouterOutlet, TodoListComponent],
})
export class AppComponent {
  constructor() {}
}
