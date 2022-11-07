import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // var w/input devorate for new todo submit event
  @Input() newTodo!: Todo;
  // Todo: Get array of todos from service
  todos: Todo[] = [];
  
  constructor(private todoservice: TodoServiceService) { }
  
  ngOnInit(): void {
    this.getTodos();
  }
  
  getTodos(): void {
    this.todoservice.getTodos().subscribe(todos=> this.todos = todos);
  }
}
