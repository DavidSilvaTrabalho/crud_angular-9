import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private snackBar: MatSnackBar) { }
  
  showMessage(msg: string):void{
    this.snackBar.open(msg, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }
}
