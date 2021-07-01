import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandadoPage } from './demandado.page';

const routes: Routes = [
  {
    path: '',
    component: DemandadoPage,
  },
  {
    path: 'datos-demandado',
    loadChildren: () => import('./datos-demandado/datos-demandado.module').then( m => m.DatosDemandadoPageModule)
  },
  {
    path: 'contrato-laboral',
    loadChildren: () => import('../contrato-laboral/contrato-laboral.module').then( m => m.ContratoLaboralPageModule)
  },
  {
    path: 'detalle-demanda',
    loadChildren: () => import('../detalle-demanda/detalle-demanda.module').then( m => m.DetalleDemandaPageModule)
  }
  // {
  //   path: 'detalle-conflictos',
  //   loadChildren: () => import('../detalle-conflictos/detalle-conflictos.module').then( m => m.DetalleConflictosPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandadoPageRoutingModule {}
