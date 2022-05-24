import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCrudComponent } from './components/pages/product-crud/product-crud.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';



const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductsCreateComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
