import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'reservas',
    loadChildren: () => import('./pages/reservas/reservas.module').then(m => m.ReservasModule)
  },
  {
    path: 'quartos',
    loadChildren: () => import('./pages/quartos/quartos.module').then(m => m.QuartosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
