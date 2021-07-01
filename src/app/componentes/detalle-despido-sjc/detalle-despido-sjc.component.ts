import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-despido-sjc',
  templateUrl: './detalle-despido-sjc.component.html',
  styleUrls: ['./detalle-despido-sjc.component.scss'],
})
export class DetalleDespidoSJCComponent implements OnInit {

 meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  constructor() {
   }

  ngOnInit() {
  }
}
