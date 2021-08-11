import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nameLower: string = 'juan';
  nameUpper: string = 'JUAN';
  name: string = 'jUaN';

  fecha: Date = new Date();
}
