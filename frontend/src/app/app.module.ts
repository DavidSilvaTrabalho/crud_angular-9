import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductReadComponent } from './components/product-read/product-read.component'
import { ProductCrudComponent } from './pages/product-crud/product-crud.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';

import { FooterDirectiveDirective } from './components/footer/footer-directive.directive';

import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule}  from '@angular/material/list'
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductsUpdateComponent } from './components/products-update/products-update.component';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

registerLocaleData(localePt)
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FooterDirectiveDirective,
    ProductCrudComponent,
    ProductReadComponent,
    ProductsCreateComponent,
    ProductsUpdateComponent,
    ProductDeleteComponent,
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
