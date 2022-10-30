import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // get todo prop from parent and pass into child below
  @Input() todo!: Todo;
  

  constructor() { }

  ngOnInit(): void {
  }

}
