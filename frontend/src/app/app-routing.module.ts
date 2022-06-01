import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsUpdateComponent } from './components/products-update/products-update.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCrudComponent } from './pages/product-crud/product-crud.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';



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
  },
  {
    path: "products/update/:id",
    component: ProductsUpdateComponent 
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
