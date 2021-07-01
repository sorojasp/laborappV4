import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleNoPagoCesantiasPageRoutingModule } from './detalle-no-pago-cesantias-routing.module';

import { DetalleNoPagoCesantiasPage } from './detalle-no-pago-cesantias.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleNoPagoCesantiasPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DetalleNoPagoCesantiasPage]
})
export class DetalleNoPagoCesantiasPageModule {}
