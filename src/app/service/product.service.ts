import { Injectable } from '@angular/core';
import {ProductModel} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:ProductModel[];
  product!: ProductModel;
  constructor() {
    this.products = [
      {productId: 1, productName: 'product 1', productPrice: 34.0, productDate: new Date()},
      {productId: 2, productName: 'product 2', productPrice: 500, productDate: new Date()},
    ];
  }
  productsList(): ProductModel[] {
    return this.products;
  }
  addproduct(newProduct: ProductModel): void {
    this.products.push(newProduct);
  }
  deleteProduct(product: ProductModel): void {
   const index= this.products.indexOf(product);
    this.products.splice(index, 1);
  }
  editProduct(id:number): ProductModel {
    this.product= this.products.find( p=>p.productId==id)!;
    return this.product;

  }

  updateProduct(product: ProductModel): void {
    this.deleteProduct(product);
    this.addproduct(product);
      }

}
