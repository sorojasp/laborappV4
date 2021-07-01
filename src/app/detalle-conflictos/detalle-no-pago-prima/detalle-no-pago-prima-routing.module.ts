import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleNoPagoPrimaPage } from './detalle-no-pago-prima.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleNoPagoPrimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleNoPagoPrimaPageRoutingModule {}
