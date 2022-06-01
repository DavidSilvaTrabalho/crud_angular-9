
import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { Product } from '../../interface/Product';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {

  itemFilteredById!: Product;
  id = this.activetedRoute.snapshot.paramMap.get("id")
  prodId!: string;
  
  constructor(
    private service: ProductsService, 
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getProductOnBackById(this.id).subscribe(product => {
      this.itemFilteredById = product
    })
  }

  saveUpdateProduct():void{
    this.service.updateProductOnBack(this.itemFilteredById, this.id).subscribe(item => {
      console.log(item)
      this.service.showMessage("Produto atualizado com sucesso!")
    })
      this.router.navigate(['/products'])
  }

  cancelEditProduct():void{
    this.router.navigate(['/products'])
  }

}
