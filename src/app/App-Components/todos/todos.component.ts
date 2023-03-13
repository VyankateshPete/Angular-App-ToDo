import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todo1 = new Todo(1, "Todo 1", "This is Todo Number 1", true);
}
