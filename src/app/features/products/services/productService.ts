import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';


export interface Product {
  id: number;
  nombre: string;
  precio: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [];
  private contador:number = 1;

  constructor() {}

  addProduct(product : Omit <Product, 'id'>) {
    this.products.push({ 

     id: this.contador++,
     nombre: product.nombre,
     precio: product.precio
  });
  }

  selectedProduct: Product | null = null;

  getProducts(): Product[] {
    return this.products;
  }

  deleteProduct( id:number) {
    this.products = this.products.filter(product => product.id !== id);
  }
    


}
