import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintBackgroundDirective } from './directives';
import { OrderByPipe } from './pipes/order-by.pipe';

const sharedDeclarations = [
  PaintBackgroundDirective,
  OrderByPipe
];

@NgModule({
  declarations: [
    ...sharedDeclarations
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedDeclarations
  ]
})
export class SharedModule { }
