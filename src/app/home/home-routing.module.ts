import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
      {
        path: '',
        redirectTo: 'home/demandado',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'abogado',
            loadChildren: () => import('../abogado/abogado.module').then( m => m.AbogadoPageModule)
          },
          {
            path: 'demandado',
            loadChildren: () => import('../demandado/demandado.module').then( m => m.DemandadoPageModule)
          },
          {
            path: 'perfil',
            loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
          },
          // {
          //   path: 'contrato-laboral',
          //   loadChildren: () => import('../contrato-laboral/contrato-laboral.module').then( m => m.ContratoLaboralPageModule)
          // },
          {
            path: '',
            redirectTo: '/home/demandado',
            pathMatch: 'full'
          }
       ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
