import { Component } from '@angular/core';
import {ProductModel} from "../model/product.model";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent {
  newProduct: ProductModel = new ProductModel(); // Initialize newProduct

  constructor(private productService: ProductService,private router: Router) {}

  addproduct() {
    this.productService.addproduct(this.newProduct);
    this.router.navigate(['/products']);

  }
}
