import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products:any;
  filter: string = '';
  constructor(private cartSvc: CartService, private prodSvc: ProductService) {
}

ngOnInit() {
  this.prodSvc.getProducts().subscribe(products =>  {
    this.products = products;
  })
}

addToCart(product: IProduct) {
  this.cartSvc.add(product);
}
getFilteredProducts() {
  return this.filter === ''
   ? this.products
   : this.products.filter((product: any) => product.category === this.filter);
}

}
