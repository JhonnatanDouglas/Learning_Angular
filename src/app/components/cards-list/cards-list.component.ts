import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
})
export class CardsListComponent {
  @Input() name!: string;
  @Input() email!: string;
  @Input() job!: string;
}
