import { Product } from '../../products/models';

interface PurchaseModel {
  item: Product;
  quantity: number;
}

export class Purchase implements PurchaseModel {
  constructor(
    public item: Product,
    public quantity = 1
  ) {}
}
