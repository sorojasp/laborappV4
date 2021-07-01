import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalDemandaPageRoutingModule } from './final-demanda-routing.module';

import { FinalDemandaPage } from './final-demanda.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalDemandaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [FinalDemandaPage]
})
export class FinalDemandaPageModule {}
