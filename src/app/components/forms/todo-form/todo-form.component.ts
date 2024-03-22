import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { TodoListService } from '../../../services/user.service'

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  constructor(private todoService: TodoListService) {}

  title = new FormControl('')
  content = new FormControl('')

  formContentSubmit(event: Event) {
    event.preventDefault()

    const data = { title: this.title.value as string, content: this.content.value as string }

    this.todoService.addTodo(data)

    this.title.setValue('')
    this.content.setValue('')
  }
}
