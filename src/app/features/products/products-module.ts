import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './pages/product-page/product-page';
import { ProductForm } from './components/product-form/product-form';
import { ProductList } from './components/product-list/product-list';
import { ProductCard } from './components/product-card/product-card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductPage, ProductForm, ProductList, ProductCard

  ],
  imports: [CommonModule, FormsModule],
  exports: [ProductPage, ProductForm, ProductList, ProductCard]
})
export class ProductsModule {}
