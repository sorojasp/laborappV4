import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleDespidoSJCPageRoutingModule } from './detalle-despido-sjc-routing.module';

import { DetalleDespidoSJCPage } from './detalle-despido-sjc.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDespidoSJCPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DetalleDespidoSJCPage]
})
export class DetalleDespidoSJCPageModule {}
