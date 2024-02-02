import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../todo';
import { BorderHighlightDirective } from '../border-highlight.directive';
import { TODOS } from '../mock-todo';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [CommonModule, BorderHighlightDirective],
  template: `
    <article *ngIf="todo">
      <div class="grid">
        <label for="todo-{{ todo.id }}">
          <input
            type="checkbox"
            id="todo-{{ todo.id }}"
            name="todo-{{ todo.id }}"
            [checked]="todo.isCompleted"
            (change)="onCheck()"
          />
          {{ todo.title }}
        </label>
        <div class="action">
          <a href="#">Edit</a>
          <a href="#" (click)="onClickDelete()">Delete</a>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .action {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }

      .action a,
      a {
        margin-left: 8px;
      }
    `
  ],
})
export class TodoComponent {
  @Input('value')
  todo: Todo | undefined

  onCheck() {
    if (this.todo) {
      this.todo.isCompleted = !this.todo?.isCompleted
      console.table(this.todo)
    }
  }

  onClickDelete() {
    if (this.todo) {
      TODOS.splice(TODOS.indexOf(this.todo), 1);
    }
  }
}
