import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from '../../../interface/Product';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  products: Product = {
    name: 'teste',
    price: 2
  }

  constructor(private productService: ProductsService, private route:Router) { }

  ngOnInit(): void {
    
  }

  createProduct():void {
    this.productService.createProductOnBack(this.products).subscribe(
      () => {
        this.productService.showMessage("produto cadastro com sucesso!")
        this.route.navigate(['/products'])
      }
    )
  }

  cancelProduct():void{
    this.route.navigate(['/products'])
  }

}
