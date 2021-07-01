import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleNoPagoPrimaPageRoutingModule } from './detalle-no-pago-prima-routing.module';

import { DetalleNoPagoPrimaPage } from './detalle-no-pago-prima.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleNoPagoPrimaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DetalleNoPagoPrimaPage]
})
export class DetalleNoPagoPrimaPageModule {}
