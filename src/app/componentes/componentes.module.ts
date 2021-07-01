import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { PersonaNaturalComponent } from './persona-natural/persona-natural.component';
import { PersonaJuridicaComponent } from './persona-juridica/persona-juridica.component';
import { DetalleDespidoSJCComponent } from './detalle-despido-sjc/detalle-despido-sjc.component';

import { DetalleNoPagoPrimaComponent } from './detalle-no-pago-prima/detalle-no-pago-prima.component';
import { DetalleNoPagoVacasComponent } from './detalle-no-pago-vacas/detalle-no-pago-vacas.component';
import { DetalleNoPagoCesantiasComponent } from './detalle-no-pago-cesantias/detalle-no-pago-cesantias.component';
import { DetalleNoPagoSalarioComponent } from './detalle-no-pago-salario/detalle-no-pago-salario.component';
import { FinalDemandaComponent } from './final-demanda/final-demanda.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    HeaderHomeComponent,
    PersonaNaturalComponent,
    PersonaJuridicaComponent,
    DetalleDespidoSJCComponent,
    DetalleNoPagoSalarioComponent,
    DetalleNoPagoCesantiasComponent,
    DetalleNoPagoPrimaComponent,
    DetalleNoPagoVacasComponent,
    FinalDemandaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    HeaderHomeComponent,
    PersonaNaturalComponent,
    PersonaJuridicaComponent,
    DetalleDespidoSJCComponent,
    DetalleNoPagoSalarioComponent,
    DetalleNoPagoCesantiasComponent,
    DetalleNoPagoPrimaComponent,
    DetalleNoPagoVacasComponent,
    FinalDemandaComponent
  ]
})
export class ComponentesModule { }
