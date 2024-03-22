import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { UsersCardComponent } from '../../components/cards/users-card/users-card.component'
import { TodoListService } from '../../services/user.service'
import { TodoFormComponent } from '../../components/forms/todo-form/todo-form.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UsersCardComponent, TodoFormComponent],
  providers: [TodoListService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  exemple = 'Reação de components'

  constructor(private todoService: TodoListService) {}

  get todoList() {
    return this.todoService.getTodoList()
  }
}
