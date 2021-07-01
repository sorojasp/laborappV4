import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleNoPagoVacasPage } from './detalle-no-pago-vacas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleNoPagoVacasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleNoPagoVacasPageRoutingModule {}
