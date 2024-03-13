import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardsListComponent } from '../cards-list/cards-list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CardsListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  usersList = [
    { name: 'Leonhart', email: 'l@g.com', job: 'Açougueira' },
    { name: 'Mikasa', email: 'm@g.com', job: 'Matar titans' },
    { name: 'Eren', email: 'e@g.com', job: 'Chorar e ser rapitada' },
  ];
}
