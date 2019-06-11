import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Purchase } from '../../models/purchase.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  selectOptions: Array<string>;
  // Что-то задать по умолчанию
  selectedField = 'name';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.selectOptions = ['name', 'category', 'price'];
  }

  get purchases(): Array<Purchase> {
    return this.cartService.getPurchases();
  }

  get amount(): number {
    // Думаю, что компонент будет чище, если этот код переместить в сервис
    // и реализовать вызов какого-то метода сервиса, как в гетере выше.
    // Так же сделать в следующем гетере
    return (
      this.purchases &&
      this.purchases.reduce((accum, current) => (accum += current.quantity), 0)
    );
  }

  get total(): number {
    return (
      this.purchases &&
      this.purchases.reduce(
        (accum, current) => (accum += current.quantity * current.item.price),
        0
      )
    );
  }

  onRemovePurchase(purchase: Purchase): void {
    console.log('Item is going to be removed from your shopping cart.');
    this.cartService.removePurchase(purchase);
  }

  onEmptyShoppingCart(): void {
    console.log('You have cleared your shopping cart successfully.');
    this.cartService.emptyShoppingCart();
  }

  onQuantityChange(purchase: Purchase): void {
    console.log('Quantity is going to be changed.');
    this.cartService.updatePurchase(purchase);
  }
}
