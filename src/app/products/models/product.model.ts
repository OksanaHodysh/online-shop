import { Category } from './category.enum';
import { Payment } from './payment.enum';

interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  seller: string;
  payments: Array<Payment>;
  isAvailable: boolean;
  isTopRated: boolean;
  feedbacks?: Array<string>;
}

export class Product implements ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: Category,
    public seller: string,
    public payments: Array<Payment>,
    public isAvailable = false,
    public isTopRated = false,
    public feedbacks: Array<string> = []
  ) {}
}
