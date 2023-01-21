import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  taskid=3;
  todolist=[
    {
      'id':1,'task':'Task1'
    },
    {
      'id':2,'task':'Task2'
    }
  ]
  addtodo(taskName:any){
    this.todolist.push({'id':this.taskid++,'task':taskName})
  }
  deletetodo(index:any){
    this.todolist.splice(index,1);
  }
}
