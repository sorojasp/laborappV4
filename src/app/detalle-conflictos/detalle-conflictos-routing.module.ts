import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleConflictosPage } from './detalle-conflictos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleConflictosPage
  },
  {
    path: 'detalle-despido-sjc',
    loadChildren: () => import('./detalle-despido-sjc/detalle-despido-sjc.module').then( m => m.DetalleDespidoSJCPageModule)
  },
  {
    path: 'detalle-no-pago-salario',
    loadChildren: () => import('./detalle-no-pago-salario/detalle-no-pago-salario.module').then( m => m.DetalleNoPagoSalarioPageModule)
  },
  {
    path: 'detalle-no-pago-vacas',
    loadChildren: () => import('./detalle-no-pago-vacas/detalle-no-pago-vacas.module').then( m => m.DetalleNoPagoVacasPageModule)
  },
  {
    path: 'detalle-no-pago-cesantias',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./detalle-no-pago-cesantias/detalle-no-pago-cesantias.module').then( m => m.DetalleNoPagoCesantiasPageModule)
  },
  {
    path: 'detalle-no-pago-prima',
    loadChildren: () => import('./detalle-no-pago-prima/detalle-no-pago-prima.module').then( m => m.DetalleNoPagoPrimaPageModule)
  },
  {
    path: 'final-demanda',
    loadChildren: () => import('./final-demanda/final-demanda.module').then( m => m.FinalDemandaPageModule)
  },
  // {
  // path: '',
  // redirectTo: 'detalle-despido-sjc',
  // pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleConflictosPageRoutingModule {}
