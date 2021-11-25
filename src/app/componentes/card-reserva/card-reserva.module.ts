import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { CardReservaComponent } from './card-reserva.component';


@NgModule({
  declarations: [CardReservaComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    CardReservaComponent
  ]
})
export class CardReservaModule { }
