import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs'
import { Product } from '../../interface/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiBase = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMessage(msg: string, isError: boolean = false):void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      direction:"ltr",
      panelClass: isError ? ["msg-error"] : ["msg-sucess"]
    })
  }

  createProductOnBack(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiBase, product).pipe(
      map( obj => obj ),
      catchError(e => this.handleError(e))
    )
  }

  handleError(e: any):Observable<any>{
    console.log("erros encontrados: " + e.message)
    this.showMessage("Ocorreu um erro", true)
    return EMPTY
  }

  readProductOnBack(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiBase)
  }  

  getProductOnBackById(id: any): Observable<Product>{
    return this.http.get<Product>(`${this.apiBase}/${id}`)
  }

  updateProductOnBack(product: Product, id: any):Observable<Product>{
    return this.http.put<Product>(`${this.apiBase}/${id}`, product)
  }

  deleteProductOnBack(id:any):Observable<Product>{
    return this.http.delete<Product>(`${this.apiBase}/${id}`)
  }

}
