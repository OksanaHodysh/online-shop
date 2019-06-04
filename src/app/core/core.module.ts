import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_CONFIG, APP_CONSTANTS, RANDOM_STRING, RandomLengthStringFactory } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: APP_CONSTANTS, useValue: APP_CONFIG},
    { provide: RANDOM_STRING, useFactory: RandomLengthStringFactory(7) }
  ]
})
export class CoreModule { }
