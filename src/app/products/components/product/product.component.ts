import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  @Output() buyProduct: EventEmitter<Product> = new EventEmitter();

  showFeedbacks = false;

  constructor() { }

  ngOnInit() {
  }

  onBuyProduct(): void {
    console.log('The item was passed to parent successfully!');
    this.buyProduct.emit(this.product);
  }

  toggle(): void {
    this.showFeedbacks = !this.showFeedbacks;
  }
}
