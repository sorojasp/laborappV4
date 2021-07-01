import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbogadoPageRoutingModule } from './abogado-routing.module';

import { AbogadoPage } from './abogado.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    ComponentesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AbogadoPageRoutingModule
  ],
  declarations: [AbogadoPage]
})
export class AbogadoPageModule {}
