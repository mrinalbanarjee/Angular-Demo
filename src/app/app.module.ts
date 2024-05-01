import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CatalogComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
