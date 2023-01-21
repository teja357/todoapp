import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {
  constructor(private td:TodoService){}
  
  todoinput="";
  addtask(){
    this.td.addtodo(this.todoinput);
    this.todoinput="";
  }
  resetform(){
    this.todoinput="";
  }
}
