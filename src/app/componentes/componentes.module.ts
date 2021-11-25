import { CardQuartoModule } from './card-quarto/card-quarto.module';
import { CardReservaModule } from './card-reserva/card-reserva.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfirmModule } from './dialog-confirm/dialog-confirm.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardReservaModule,
    CardQuartoModule,
    DialogConfirmModule
  ]
})
export class ComponentesModule { }
