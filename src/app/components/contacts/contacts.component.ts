import { Component } from '@angular/core';
import { CartaoComponent } from '../cartao/cartao.component';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from '../forms/contact-form/contact-form.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, CartaoComponent, ContactFormComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  userslists2 = [
    { name: 'leon', age: 19 },
    { name: 'nilso', age: 18 },
    { name: 'joan', age: 20 },
  ];
}
