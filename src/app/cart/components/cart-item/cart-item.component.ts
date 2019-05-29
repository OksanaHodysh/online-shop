import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { Purchase } from '../../models/purchase.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() purchase: Purchase;

  @Output() removePurchase: EventEmitter<Purchase> = new EventEmitter();
  @Output() changeQuantity: EventEmitter<Purchase> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('CartItemComponent initialized.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.purchase.firstChange) {
      console.log(changes.purchase.currentValue);
    }
  }

  ngOnDestroy(): void {
    console.log('CartItemComponent destroyed.');
  }

  onRemoveItem(): void {
    console.log('Item was successfully passed to parent for subsequent deletion.');
    this.removePurchase.emit(this.purchase);
  }

  onQuantityIncrease(): void {
    console.log('Quantity increased.');
    this.purchase.quantity++;
    this.changeQuantity.emit(this.purchase);
  }

  onQuantityDecrease(): void {
    console.log('Quantity decreased.');
    this.purchase.quantity--;
    this.changeQuantity.emit(this.purchase);
  }
}
