import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCrudComponent } from './pages/product-crud/product-crud.component';



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
