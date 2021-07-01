import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleConflictosPageRoutingModule } from './detalle-conflictos-routing.module';

import { DetalleConflictosPage } from './detalle-conflictos.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleConflictosPageRoutingModule,
    ComponentesModule
  ],
  declarations: [DetalleConflictosPage]
})
export class DetalleConflictosPageModule {}
