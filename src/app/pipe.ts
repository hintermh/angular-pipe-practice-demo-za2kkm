import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutout'
})
export class PipeComponent implements PipeTransform {
  transform(value: string, params: number) {
    if (value && params) {
      return value.slice(0, params)
    } else {
      return value;
    }

  }
}