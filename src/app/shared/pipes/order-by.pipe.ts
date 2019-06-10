import { Pipe, PipeTransform } from '@angular/core';

import { Purchase } from '../../cart/models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<Purchase>, sortField: string, asc = false): Array<Purchase> {
    if (Array.isArray(value) && value.length && sortField) {
      value.sort((purchaseA: Purchase, purchaseB: Purchase) => {
        const condition = asc
          ? purchaseA.item[sortField] > purchaseB.item[sortField]
          : purchaseA.item[sortField] < purchaseB.item[sortField];

        return condition ? 1 : -1;
      });
    }

    return value;
  }
}
