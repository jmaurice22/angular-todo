import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // var w/input devorate for new todo submit event
  @Input() newTodo!: Todo;
  // Todo: Get array of todos from service
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
     
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
 
  }

}
