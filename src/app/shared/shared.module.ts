import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickHandlerDirective, PaintBackgroundDirective } from './directives';
import { OrderByPipe } from './pipes';

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
