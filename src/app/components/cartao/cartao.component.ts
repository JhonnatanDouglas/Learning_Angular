import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css',
})
export class CartaoComponent {
  @Input() name!: string;
  @Input() age!: number;
}
