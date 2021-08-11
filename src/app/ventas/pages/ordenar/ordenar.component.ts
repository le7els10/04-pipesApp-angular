import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  may: boolean = true;
  setMay = () => {
    this.may = !this.may;
  };

  heroes: Heroe[] = [
    {
      name: 'Batman',
      fly: false,
      color: 1,
    },
    {
      name: 'Superman',
      fly: true,
      color: 2,
    },
    {
      name: 'Spider-man',
      fly: false,
      color: 3,
    },
    {
      name: 'Mujer maravilla',
      fly: true,
      color: 1,
    },
  ];
}
