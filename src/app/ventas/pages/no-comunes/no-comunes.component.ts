import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  name: string = 'Juana';
  isMale: string = 'F';
  change: boolean = true;

  invitacionMap = {
    M: 'invitarlo',
    F: 'invitarla',
  };

  changeName = () => {
    this.change = !this.change;
    if (this.change) {
      this.isMale = 'F';
      this.name = 'Susana';
    } else {
      this.isMale = 'M';
      this.name = 'Juan';
    }
  };

  clientes: string[] = ['maria', 'juan', 'pedro'];
  clientesMap = {
    '=0': 'No tenemos clientes esperando',
    '=1': 'Tenemos un cliente esperando',
    other: `Tenemos ${this.clientes.length} clientes esperando`,
  };

  deleteClient = () => {
    this.clientes.pop();
  };

  //keyvalue pipe
  persona = {
    name: 'Juanda',
    age: 23,
  };
}
