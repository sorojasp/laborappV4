import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleNoPagoSalarioPageRoutingModule } from './detalle-no-pago-salario-routing.module';

import { DetalleNoPagoSalarioPage } from './detalle-no-pago-salario.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleNoPagoSalarioPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DetalleNoPagoSalarioPage]
})
export class DetalleNoPagoSalarioPageModule {}
