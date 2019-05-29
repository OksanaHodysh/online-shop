import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent, CartListComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CartRoutingModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
