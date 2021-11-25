import { ReservasModule } from './reservas/reservas.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuartosModule } from './quartos/quartos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReservasModule,
    QuartosModule
  ]
})
export class PagesModule { }
