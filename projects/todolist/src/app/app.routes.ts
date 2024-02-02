import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {path: '', component: TodoListComponent},
    {path: 'task/:id', component: TodoComponent}
];
