import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-products',
  standalone: true,
  imports: [],
  templateUrl: './cards-products.component.html',
  styleUrl: './cards-products.component.css',
})
export class CardsProductsComponent {
  @Input() nameProduct!: string;
  @Input() priceProduct!: number;
  @Input() descriptionProduct!: string;
}
