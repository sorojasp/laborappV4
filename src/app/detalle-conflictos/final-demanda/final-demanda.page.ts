import { Component, OnInit } from '@angular/core';
import { VerificadorConflictos } from '../VerificadorConflictos';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-final-demanda',
  templateUrl: './final-demanda.page.html',
  styleUrls: ['./final-demanda.page.scss'],
})
export class FinalDemandaPage{

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
         console.log(this.conflictos = JSON.parse(conflictos.opciones));
     }
   });
  //  router.navigate([], { replaceUrl: true });
 }

 seguir()
 {
   this.router.navigate([], { replaceUrl: true });
   console.log(" HOLA ");
  //  this.verificadorConflictos = new VerificadorConflictos(this.conflictos, this.router);
  //  this.verificadorConflictos.SetRutaSecundariaConflicto();
 }

}
