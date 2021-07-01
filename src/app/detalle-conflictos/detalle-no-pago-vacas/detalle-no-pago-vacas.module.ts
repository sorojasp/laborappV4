import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleNoPagoVacasPageRoutingModule } from './detalle-no-pago-vacas-routing.module';

import { DetalleNoPagoVacasPage } from './detalle-no-pago-vacas.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleNoPagoVacasPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DetalleNoPagoVacasPage]
})
export class DetalleNoPagoVacasPageModule {}
