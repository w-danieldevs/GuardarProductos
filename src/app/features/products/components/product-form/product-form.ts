import { Component } from '@angular/core';
import { ProductService } from '../../services/productService';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {

  nombre: string = '';
  precio: number = 0;

  mensajeError: string = '';

  constructor(
    private productService: ProductService
  ) {}

  guardar(): void {

    // Validar nombre vacío
    if (this.nombre.trim() === '') {
      this.mensajeError = 'El nombre es obligatorio';
      return;
    }

    // Validar longitud mínima
    if (this.nombre.trim().length < 3) {
      this.mensajeError = 'El nombre debe tener mínimo 3 caracteres';
      return;
    }

    // Validar precio
    if (this.precio <= 0) {
      this.mensajeError = 'El precio debe ser mayor que 0';
      return;
    }

    this.productService.addProduct({
      nombre: this.nombre,
      precio: this.precio
    });

    // Limpiar formulario
    this.nombre = '';
    this.precio = 0;
    this.mensajeError = '';
  }
}