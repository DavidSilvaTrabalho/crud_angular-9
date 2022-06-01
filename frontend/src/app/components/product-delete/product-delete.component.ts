import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../interface/Product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  idProductParams = this.activatedRouter.snapshot.paramMap.get("id")
  productFromBack!: Product

  constructor(
    private service: ProductsService, 
    private route: Router, 
    private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getProductOnBackById(this.idProductParams).subscribe(item => {
      this.productFromBack = item
    })
  }


  saveDeleteProduct():void{
    
    if(window.confirm('Are sure you want to delete this item ?')){
      //put your delete method logic here
      this.service.deleteProductOnBack(this.idProductParams).subscribe(() => {
        this.service.showMessage("Produto excluido com sucesso!")
      })
      this.route.navigate(["/products"])
     }

  }

  cancelExclusionProduct():void{
    this.route.navigate(['/products'])
  }

}
