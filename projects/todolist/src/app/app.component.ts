import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <h1>Listes des choses à faire</h1>
    <ul *ngFor="let todo of todolist">
      <li *ngIf="todo.isCompleted">
        {{ todo.title }}
      </li>
    </ul>
  `,
  styles: []
})
export class AppComponent {
  todolist = TODOS;

  constructor(){

  }

  ngOnInit(){
    console.log(this.todolist)
  };

  selectTodo(id:number){
    console.table(this.todolist[id-1])
  }
} 