import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { Todo } from '../todo';
import { TODOS } from '../mock-todo';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  template: `
    <h1>Liste des choses à faire :</h1>

    <a
      href="#"
      role="button"
      [class.secondary]="!completedFilter"
      (click)="onClickTodo()"
      >A faire</a
    >

    <a
      href="#"
      role="button"
      [class.secondary]="completedFilter"
      (click)="onClickCompleted()"
      >Terminées</a
    >

    <ng-container *ngFor="let todo of todoList">
      <todo
        *ngIf="todo.isCompleted === completedFilter"
        [value]="todo"
      ></todo>
    </ng-container>
  `,
  styles: [
    `
      a {
        margin-left: 8px;
      }
    `,
  ],
})
export class TodoListComponent {
  todoList: Todo[] = TODOS;

  completedFilter = false;

  onClickTodo() {
    this.completedFilter = false;
  }

  onClickCompleted() {
    this.completedFilter = true;
  }
}
