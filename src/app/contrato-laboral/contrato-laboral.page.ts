import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrato-laboral',
  templateUrl: './contrato-laboral.page.html',
  styleUrls: ['./contrato-laboral.page.scss'],
})
export class ContratoLaboralPage implements OnInit {

  meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  constructor(private router: Router) { }

ngOnInit(){}

  seguir()
  {
    this.router.navigate(['home/demandado/detalle-demanda']);
  }

}
