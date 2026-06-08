import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/productService';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {

constructor( 
  public productService: ProductService
){}


get products(): Product[]{
  return this.productService.getProducts();
}

eliminar(id: number): void {
    this.productService.deleteProduct(id);  
}

verDetalles(producto: Product): void {
 if (this.productService.selectedProduct?.id === producto.id) {
    this.productService.selectedProduct = null;
  } else {
    this.productService.selectedProduct= producto;
  }
}



}


