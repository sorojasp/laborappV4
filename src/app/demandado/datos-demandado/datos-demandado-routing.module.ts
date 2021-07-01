import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosDemandadoPage } from './datos-demandado.page';

const routes: Routes = [
  {
    path: '',
    component: DatosDemandadoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosDemandadoPageRoutingModule {}
