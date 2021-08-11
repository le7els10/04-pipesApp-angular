import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, may: boolean = true): string {
    return may ? value.toUpperCase() : value.toLowerCase();
  }
}
