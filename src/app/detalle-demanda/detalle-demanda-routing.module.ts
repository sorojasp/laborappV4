import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDemandaPage } from './detalle-demanda.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDemandaPage,
  },
  {
    path: 'detalle-conflictos',
    loadChildren: () => import('../detalle-conflictos/detalle-conflictos.module').then( m => m.DetalleConflictosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDemandaPageRoutingModule {}
