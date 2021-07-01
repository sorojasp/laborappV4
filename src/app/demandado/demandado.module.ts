import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandadoPageRoutingModule } from './demandado-routing.module';

import { DemandadoPage } from './demandado.page';

import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandadoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DemandadoPage]
})
export class DemandadoPageModule {}
