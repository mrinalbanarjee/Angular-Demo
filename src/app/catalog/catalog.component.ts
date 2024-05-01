import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products:any;
  filter: string = '';
  constructor(private cartSvc: CartService, private prodSvc: ProductService, private router: Router, private route: ActivatedRoute) {
}

ngOnInit() {
  this.prodSvc.getProducts().subscribe(products =>  {
    this.products = products;
  });

 this.route.params.subscribe((params) => {
  this.filter = params['filter'] ?? '';
 });
}

addToCart(product: IProduct) {
  this.cartSvc.add(product);
  this.router.navigate(['/cart']);
}
getFilteredProducts() {
  return this.filter === ''
   ? this.products
   : this.products.filter((product: any) => product.category === this.filter);
}

}
