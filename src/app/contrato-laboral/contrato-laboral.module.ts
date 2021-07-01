import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratoLaboralPageRoutingModule } from './contrato-laboral-routing.module';

import { ContratoLaboralPage } from './contrato-laboral.page';

import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratoLaboralPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ContratoLaboralPage]
})
export class ContratoLaboralPageModule {}
