import { Component } from '@angular/core';
import {ProductModel} from "../model/product.model";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent {
  products: ProductModel[] ;
  constructor(private Service: ProductService) {
    this.products = Service.productsList();
  }

  deleteProduct(product: ProductModel) {
    let message = confirm('Are you sure you want to delete this product?');
    if (message)
    this.Service.deleteProduct(product);

  }
}
