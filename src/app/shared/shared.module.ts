import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintBackgroundDirective } from './directives';
import { ClickHandlerDirective } from './directives/click-handler.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

const sharedDeclarations = [
  PaintBackgroundDirective,
  ClickHandlerDirective,
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
