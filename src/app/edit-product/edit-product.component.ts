import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../model/product.model";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  currentProduct=new ProductModel();
  constructor(private service: ProductService,private activatedRoute: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    //pour savoir l'ID du produit à modifier
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduct =this.service.editProduct(this.activatedRoute.snapshot.params['id']);
  }
  updateProduct(): void {
    this.service.updateProduct(this.currentProduct);
    this.router.navigate(['/products']);
  }

}
