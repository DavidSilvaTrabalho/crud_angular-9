import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule}  from '@angular/material/list'
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './components/pages/home/home.component';
import { FooterDirectiveDirective } from './components/footer/footer-directive.directive';
import { ProductCrudComponent } from './components/pages/product-crud/product-crud.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FooterDirectiveDirective,
    ProductCrudComponent,
    ProductsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports: [FooterDirectiveDirective],
  providers: [FooterDirectiveDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
