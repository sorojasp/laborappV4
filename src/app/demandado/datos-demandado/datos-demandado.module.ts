import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosDemandadoPageRoutingModule } from './datos-demandado-routing.module';

import { DatosDemandadoPage } from './datos-demandado.page';

import { ComponentesModule } from '../../componentes/componentes.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosDemandadoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DatosDemandadoPage]
})
export class DatosDemandadoPageModule {}
