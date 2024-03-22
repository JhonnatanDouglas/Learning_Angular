import { Injectable } from '@angular/core'
import { ITodo, TTodoCreateFormData } from '../interfaces/users.interface'

@Injectable({ providedIn: 'root' })
export class UserService {
  userList = [
    {
      name: 'Alex',
      email: 'alexdoido@gmail.com',
      job: 'Programador de programas',
    },
    {
      name: 'Osvaldo',
      email: 'osvaldodog@gmail.com',
      job: 'Instrutor de bebidas',
    },
    {
      name: 'Maria',
      email: 'mariacountmein@gmail.com',
      job: 'Seguradora de velas',
    },
  ]
}

@Injectable({ providedIn: 'root' })
export class TodoListService {
  private todoList: ITodo[] = []

  getTodoList() {
    return this.todoList
  }

  addTodo(formData: TTodoCreateFormData) {
    const newTodo = { ...formData, id: crypto.randomUUID() }
    this.todoList.push(newTodo)
    console.log(this.todoList)
  }

  removeTodo(removingById: string) {
    const findIndex = this.todoList.findIndex((todo) => {
      todo.id === removingById
    })
    this.todoList.splice(findIndex, 1)
  }
}
