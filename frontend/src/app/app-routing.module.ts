import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCrudComponent } from './components/pages/product-crud/product-crud.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/products/products.component';


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
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
