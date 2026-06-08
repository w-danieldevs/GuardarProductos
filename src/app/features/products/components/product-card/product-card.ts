import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/productService';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  constructor(
    public productService : ProductService
  ){}

}
