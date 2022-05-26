import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Product } from '../../interface/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiBase = "http://localhost:3000/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMessage(msg: string):void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }

  createProductOnBack(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiBase, product)
  }

}
