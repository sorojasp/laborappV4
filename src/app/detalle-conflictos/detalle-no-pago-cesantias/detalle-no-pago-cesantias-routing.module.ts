import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleNoPagoCesantiasPage } from './detalle-no-pago-cesantias.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleNoPagoCesantiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleNoPagoCesantiasPageRoutingModule {}
