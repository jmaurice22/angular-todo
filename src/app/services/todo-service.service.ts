import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  todos: Todo[] = [
    {
    id:1,
    title: 'Todo One',
  },
  {
    id:1,
    title: 'Todo Two',
  
  },
  {
    id:1,
    title: 'Todo Three',
   
  },
  {
    id:4,
    title: 'Todo Four'
  }
];

getTodos(): Observable<Todo[]> {
  // this.todos = this.todoservice.getTodos();
  const todos = of(this.todos);
  return todos;
}

addTodo(newTodo: Todo): void {
  let n = newTodo;
  this.todos.push(n);
  console.log(`added new todo to array:  ${n}`)

}
}