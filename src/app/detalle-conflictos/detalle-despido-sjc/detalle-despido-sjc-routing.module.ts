import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDespidoSJCPage } from './detalle-despido-sjc.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDespidoSJCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDespidoSJCPageRoutingModule {}
