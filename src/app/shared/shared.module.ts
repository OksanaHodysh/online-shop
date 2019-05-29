import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintBackgroundDirective } from './directives';

@NgModule({
  declarations: [
    PaintBackgroundDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaintBackgroundDirective
  ]
})
export class SharedModule { }
