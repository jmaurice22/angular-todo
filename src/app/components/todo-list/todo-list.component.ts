import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // var w/input decorator for new todo submit event
  @Input() newTodo!: Todo;
 
  // Todo: Get array of todos from service
  todos: Todo[] = [];
  
  /**
   * Inject TodoService as a dependency
   * make variable privately accessible
   * @param todoservice 
   */
  constructor(private todoservice: TodoServiceService) { }
  
  ngOnInit(): void {
    this.getTodos();
  }
  
  // get all todos
  getTodos(): void {
    this.todoservice.getTodos().subscribe(todos=> this.todos = todos);
  }

  // add a new todo
  addTodo(newTodo: Todo): void {
    console.log('Adding new todo...');
    this.todoservice.addTodo(newTodo);
  }
}
