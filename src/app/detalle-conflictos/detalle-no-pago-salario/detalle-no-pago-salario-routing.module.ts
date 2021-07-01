import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleNoPagoSalarioPage } from './detalle-no-pago-salario.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleNoPagoSalarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleNoPagoSalarioPageRoutingModule {}
