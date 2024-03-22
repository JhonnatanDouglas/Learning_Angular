import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
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
  ];
}
