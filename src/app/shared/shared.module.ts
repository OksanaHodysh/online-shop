import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintBackgroundDirective } from './directives';
import { ClickHandlerDirective } from './directives/click-handler.directive';

@NgModule({
  declarations: [
    PaintBackgroundDirective,
    ClickHandlerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaintBackgroundDirective,
    ClickHandlerDirective
  ]
})
export class SharedModule { }
