import { Injectable } from '@angular/core';

export interface ITodo {
  title: string;
  isDone: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private todos: ITodo[] = [{
    title: 'Make some food',
    isDone: false,
  }, {
    title: 'Feed the cat',
    isDone: false,
  }, {
    title: 'Do some work',
    isDone: false,
  }, {
    title: 'Water plants',
    isDone: true,
  }];

  constructor() { }

  getTodos() {
    return this.todos;
  }

  toggleDone(index: number) {
    this.todos[index].isDone = !this.todos[index].isDone;
  }

  addTodo(title: string) {
    const todo: ITodo = {
      title,
      isDone: false,
    };

    this.todos.push(todo);
  }
}
