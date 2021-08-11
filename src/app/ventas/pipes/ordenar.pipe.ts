import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroArray: Heroe[]): Heroe[] {
    let heroes = heroArray.sort((a, b) => (a.name > b.name ? 1 : -1));

    return heroes;
  }
}
