import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Promise<Array<Product>>;

  constructor(
    private cartService: CartService,
    private productsService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuyProduct(product: Product): void {
    console.log('The item is going to be added to your shopping cart!');
    this.cartService.addPurchase(product);
  }
}
