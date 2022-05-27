import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products-service/products.service';
import { Router } from '@angular/router';
import { Product } from '../../../interface/Product';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  produtos: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductsService, private route:Router) { }

  ngOnInit(): void {
    
  }

  createProduct():void {
    
      this.productService.createProductOnBack(this.produtos).subscribe(
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
