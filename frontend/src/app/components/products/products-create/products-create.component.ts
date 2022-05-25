import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  constructor(private productService: ProductsService, private route:Router) { }

  ngOnInit(): void {
    
  }

  createProduct():void {
    this.productService.showMessage("produto cadastro com sucesso!")
  }

  cancelProduct():void{
    this.route.navigate(['/products'])
  }

}
