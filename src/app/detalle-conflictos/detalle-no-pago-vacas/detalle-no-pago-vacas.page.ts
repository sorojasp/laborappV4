import { Component, OnInit } from '@angular/core';
import { VerificadorConflictos } from '../VerificadorConflictos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-no-pago-vacas',
  templateUrl: './detalle-no-pago-vacas.page.html',
  styleUrls: ['./detalle-no-pago-vacas.page.scss'],
})
export class DetalleNoPagoVacasPage{
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
  //  router.navigate([], { replaceUrl: true });
 }

 seguir()
 {
   this.router.navigate([], { replaceUrl: true });
   this.verificadorConflictos = new VerificadorConflictos(this.conflictos, this.router);
   this.verificadorConflictos.SetRutaSecundariaConflicto();
 }

}
