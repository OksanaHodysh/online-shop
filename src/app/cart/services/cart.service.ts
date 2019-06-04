import { Injectable } from '@angular/core';

import { Purchase } from '../models/purchase.model';
import { Product } from '../../products/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  purchases: Array<Purchase> = [];

  constructor() { }

  getPurchases(): Array<Purchase> {
    return this.purchases;
  }

  getPurchase(id): Purchase {
    return this.purchases.find((purchase) => purchase.item.id === id);
  }

  addPurchase(item: Product): void {
    if (!this.getPurchase(item.id)) {
      console.log('Congratulations! Item was successfully added to your shopping cart.');
      this.purchases.push(new Purchase(item));
    } else {
      console.log('The item is already in your shopping cart.');
    }
  }

  removePurchase(purchase: Purchase) {
    console.log('Item was successfully removed from your shopping cart.');
    this.purchases = this.purchases.filter((item) => item !== purchase);
  }

  updatePurchase(purchase: Purchase): void {
    console.log('Item quantity was updated successfully.');
    this.purchases = [
      ...this.purchases.filter((item) => item.item.id !== purchase.item.id),
      purchase
    ];
  }

  emptyShoppingCart(): void {
    this.purchases = [];
  }
}
