import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratoLaboralPage } from './contrato-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: ContratoLaboralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratoLaboralPageRoutingModule {}
