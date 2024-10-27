import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListproductComponent} from "./listproduct/listproduct.component";
import {AddproductsComponent} from "./addproducts/addproducts.component";
import {EditProductComponent} from "./edit-product/edit-product.component";

const routes: Routes = [

  { path: 'products', component: ListproductComponent },
  { path: 'addproducts', component: AddproductsComponent },
  { path: 'editproducts/:id', component: EditProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
