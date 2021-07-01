import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-demandado',
  templateUrl: './datos-demandado.page.html',
  styleUrls: ['./datos-demandado.page.scss'],
})
export class DatosDemandadoPage implements OnInit {

  // tslint:disable-next-line: ban-types
  opcion: String = 'opcion1';

  constructor() { }

  ngOnInit() {
  }

}
