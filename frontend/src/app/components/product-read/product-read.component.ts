import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { Product } from '../../interface/Product';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  productsReadFromBack: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.readProductOnBack().subscribe(itemRead => {
      this.productsReadFromBack = itemRead
    })
  }

}
