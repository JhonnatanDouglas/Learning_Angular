import { Component, Input } from '@angular/core'
import { TodoListService } from '../../../services/user.service'

@Component({
  selector: 'app-users-card',
  standalone: true,
  imports: [],
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.css',
})
export class UsersCardComponent {
  constructor(private todoService: TodoListService) {}

  @Input() id!: string
  @Input() title!: string
  @Input() content!: string

  handleClick() {
    this.todoService.removeTodo(this.id)
  }
}
