
import { Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import { Component } from '@angular/core';
import { VerificadorConflictos } from '../detalle-conflictos/VerificadorConflictos';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detalle-demanda',
  templateUrl: './detalle-demanda.page.html',
  styleUrls: ['./detalle-demanda.page.scss'],
})
export class DetalleDemandaPage {

  // opcionesConflicto: any = [
  //   { id: 1, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/detalle-despido-sjc', name: 'Despido Injustificado' },
  //   { id: 2, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/detalle-no-pago-salario', name: 'Pago Salario' },
  //   { id: 3, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/detalle-no-pago-vacas', name: 'Pago Vacaciones' },
  //   { id: 4, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/detalle-no-pago-cesantias', name: 'Pago Cesantias' },
  //   { id: 5, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/detalle-no-pago-prima', name: 'Pago Primas' },
  //   { id: 6, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/final-demanda', name: 'Pago ARL ' },
  //   { id: 7, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/final-demanda', name: 'Pago Pensiones' },
  //   { id: 8, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/final-demanda', name: 'Pago HorasExtras' },
  //   { id: 9, isChecked: false, redirectTo: 'home/demandado/detalle-conflictos/final-demanda', name: 'Pago FestiDomini' },
  // ];
  opcionesConflicto: any = [
    { id: 1, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/detalle-despido-sjc', name: 'Despido Injustificado' },
    // tslint:disable-next-line: max-line-length
    { id: 2, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/detalle-no-pago-salario', name: 'Pago Salario' },
    { id: 3, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/detalle-no-pago-vacas', name: 'Pago Vacaciones' },
    { id: 4, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/detalle-no-pago-cesantias', name: 'Pago Cesantias' },
    { id: 5, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/detalle-no-pago-prima', name: 'Pago Primas' },
    { id: 6, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/final-demanda', name: 'Pago ARL ' },
    { id: 7, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/final-demanda', name: 'Pago Pensiones' },
    { id: 8, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/final-demanda', name: 'Pago HorasExtras' },
    { id: 9, isChecked: false, redirectTo: 'home/demandado/detalle-demanda/detalle-conflictos/final-demanda', name: 'Pago FestiDomini' },
  ];

  constructor(
    private router: Router,
    public alertController: AlertController
  )
  {}

  seguir() {
   let contador = 0;
   this.opcionesConflicto.forEach(element => {
      if (element.isChecked === false)
      {
        contador++;
      }
    });
   if (contador === this.opcionesConflicto.length) {
        this.presentAlert();
    }
    else
    {
         let verificadorConflictos: VerificadorConflictos;
         verificadorConflictos = new VerificadorConflictos(this.opcionesConflicto, this.router);
         verificadorConflictos.SetRutaInicialConflicto();
    }
  }

  obtenerID(id: number) {
    this.opcionesConflicto.forEach((element: any) => {
      if (element.id === id) {
        element.isChecked = !element.isChecked;
        console.log(element.id, element.isChecked);
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Por favor, seleccione sus conflictos.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
