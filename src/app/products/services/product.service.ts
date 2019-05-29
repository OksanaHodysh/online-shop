import { Injectable } from '@angular/core';
import { Category, Payment, Product } from '../models';

const products = [
  new Product(
    1,
    'skirt',
    'a blue cotton checked skirt',
    99.99,
    Category.Clothes,
    'Inspired Artist',
    [Payment.MasterCard, Payment.Visa, Payment.PayPal],
    true,
    true,
    ['The skirt looks brilliant.', 'I love the skirt, it is awesome!']
  ),
  new Product(
    7,
    'sofa',
    'a green leather modular sofa',
    999.99,
    Category.Furniture,
    'Inspired Carpenter',
    [Payment.MasterCard, Payment.Visa]
  ),
  new Product(
    15,
    'cup',
    'a yellow ceramic cup 500ml',
    199.99,
    Category.KitchenUtensils,
    'Cup Collector',
    [Payment.MasterCard, Payment.Visa, Payment.PayPal],
    true,
    true,
    ['The cup is nice.', 'The cup is really big. I love it!']
  ),
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return products;
  }
}
