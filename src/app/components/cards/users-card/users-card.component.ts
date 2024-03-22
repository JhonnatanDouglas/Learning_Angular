import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-card',
  standalone: true,
  imports: [],
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.css',
})
export class UsersCardComponent {
  @Input() name!: string;
  @Input() email!: string;
  @Input() job!: string;
}
