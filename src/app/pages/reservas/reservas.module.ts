import { MatButtonModule } from '@angular/material/button';
import { CardReservaModule } from './../../componentes/card-reserva/card-reserva.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasComponent } from './reservas.component';
import { ReservaFormModule } from './reserva-form/reserva-form.module';


@NgModule({
  declarations: [ReservasComponent],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    ReservaFormModule,
    CardReservaModule,
    MatButtonModule
  ]
})
export class ReservasModule { }
