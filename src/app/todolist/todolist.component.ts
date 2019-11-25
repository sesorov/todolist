import { Component } from '@angular/core';
import {DataService, ITodo} from '../data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todos: ITodo[];
  input = new FormControl();

  constructor(private service: DataService) {
    this.todos = this.service.getTodos();
  }

  toggleDone(index: number) {
    this.service.toggleDone(index);
  }

  onTodoAdd() {
    const title = this.input.value;

    this.service.addTodo(title);
    this.input.setValue('');
  }
}
