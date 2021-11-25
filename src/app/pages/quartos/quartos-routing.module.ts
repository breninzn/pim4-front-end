import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuartosComponent } from './quartos.component';

const routes: Routes = [{ path: '', component: QuartosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuartosRoutingModule { }
