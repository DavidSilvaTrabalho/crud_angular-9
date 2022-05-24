import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

import {MatCardModule} from '@angular/material/card'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeComponent } from './components/pages/home/home.component';
import { ProductCrudComponent } from './components/pages/product-crud/product-crud.component';
import { FooterDirectiveDirective } from './components/footer/footer-directive.directive';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    FooterDirectiveDirective,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    
  ],
  exports: [FooterDirectiveDirective],
  providers: [FooterDirectiveDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
