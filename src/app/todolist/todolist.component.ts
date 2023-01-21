import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  constructor(private td:TodoService){}
  
  todolist=this.td.todolist;
  removetodo(i:any){
    this.td.deletetodo(i);
  }
}
