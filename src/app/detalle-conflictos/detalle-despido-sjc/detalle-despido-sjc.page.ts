
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { VerificadorConflictos } from '../VerificadorConflictos';

@Component({
  selector: 'app-detalle-despido-sjc',
  templateUrl: './detalle-despido-sjc.page.html',
  styleUrls: ['./detalle-despido-sjc.page.scss'],
})
export class DetalleDespidoSJCPage {

   verificadorConflictos: VerificadorConflictos;
   conflictos: any;

  meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  opcionesConflicto: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  )
  {
    this.route.queryParams.subscribe(conflictos => {
      if (conflictos && conflictos.opciones) {
          this.conflictos = JSON.parse(conflictos.opciones);
      }
    });
    // this.router.navigate([], { replaceUrl: true });
  }

  seguir()
  {
    this.router.navigate([], { replaceUrl: true });
    console.log(this.conflictos);
    this.verificadorConflictos = new VerificadorConflictos(this.conflictos, this.router);
    this.verificadorConflictos.SetRutaSecundariaConflicto();
  }
}
