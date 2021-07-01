import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleDemandaPageRoutingModule } from './detalle-demanda-routing.module';

import { DetalleDemandaPage } from './detalle-demanda.page';

import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDemandaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DetalleDemandaPage]
})
export class DetalleDemandaPageModule {}
