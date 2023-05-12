import { Inject } from '@angular/core';

export class Product {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;

  constructor(title: string, price: number, description: string, image: string, category: string) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
    this.category = category;
  }
}
