import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardsProductsComponent } from '../../cards-products/cards-products.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardsProductsComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  listProducts: { name: string; price: number; description: string }[] = [];

  constructor() {
    const savedProducts = localStorage.getItem('@listProducts');
    if (savedProducts) {
      this.listProducts = JSON.parse(savedProducts);
    }
  }

  newProduct: { name: string; price: number; description: string } = {
    name: '',
    price: 0,
    description: '',
  };

  name = new FormControl('');
  price = new FormControl(0);
  description = new FormControl('');

  formProductSubmit(e: Event) {
    e.preventDefault();

    const nameValue: string = this.name.value || '';
    const priceValue: number = this.price.value || 0;
    const descriptionValue: string = this.description.value || '';

    this.newProduct = {
      name: nameValue,
      price: priceValue,
      description: descriptionValue,
    };

    this.listProducts.push({ ...this.newProduct });

    localStorage.setItem('@listProducts', JSON.stringify(this.listProducts));

    console.log(this.listProducts);

    this.name.setValue('');
    this.price.setValue(0);
    this.description.setValue('');
  }
}
